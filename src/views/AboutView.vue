<script setup lang="ts">
import Button from 'primevue/button';
</script>
<template>
  <section>
    <h1>About</h1>

    <div>
      <RouterLink to="/test">
        <Button label="Go to Test" />
      </RouterLink>
    </div>
  </section>
</template>
