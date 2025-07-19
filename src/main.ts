import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

import './styles/main.css';

// Primevue
import PrimeVue from 'primevue/config';
import { AuraCustomPreset } from './styles/primevue.config';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: AuraCustomPreset
  }
});

app.mount('#app');
