<script setup lang="ts">
import { invoke } from '@tauri-apps/api/core';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import { ref } from 'vue';

const greetMsg = ref('');
const name = ref('');
const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value });
}
</script>
<template>
  <section>
    <h1>Test</h1>

    <h1>Welcome to Tauri + Vue</h1>

    <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <div class="my-10 flex justify-center">
      <h1 class="mt-5 text-2xl font-bold text-neutral-400">Tailwind Test</h1>
    </div>

    <div class="my-5 flex flex-col justify-center gap-3">
      <h1 class="text-xl font-bold text-neutral-400">PrimeVue Test</h1>

      <div class="flex flex-wrap justify-center gap-2">
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warn" severity="warn" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
      </div>

      <div>
        <RouterLink to="/about"><Button label="Go to About" /></RouterLink>
      </div>

      <div>
        <Select
          v-model="selectedCity"
          :options="cities"
          option-label="name"
          placeholder="Select a City"
          class="w-full md:w-56"
        />
      </div>

      <div>
        <InputText v-model="name" type="text" placeholder="Normal" class="w-full md:w-56" />
      </div>
    </div>

    <form class="row" @submit.prevent="greet">
      <input id="greet-input" v-model="name" placeholder="Enter a name..." />
      <button type="submit">Greet</button>
    </form>
    <p>{{ greetMsg }}</p>
  </section>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}

.container {
  margin: 0;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.row {
  display: flex;
  justify-content: center;
}
</style>
