import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './styles/main.css';

// Primevue
import 'primeicons/primeicons.css';
import AnimateOnScroll from 'primevue/animateonscroll';
import BadgeDirective from 'primevue/badgedirective';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import FocusTrap from 'primevue/focustrap';
import Ripple from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';
import { CustomPt } from './primevue/passthrough.config';
import { AuraCustomPreset } from './primevue/primevue.config';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: AuraCustomPreset,
    options: {
      darkModeSelector: '.dark' // Activate dark mode only when html has .dark class
    }
  },
  pt: CustomPt
});
app.use(ConfirmationService);

// Register all directives
app.directive('tooltip', Tooltip);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);
app.directive('ripple', Ripple);
app.directive('badge', BadgeDirective);

app.mount('#app');
