<script setup lang="ts">
import { RouterView } from 'vue-router';
// import { fetchTest } from '@/api/test';
// import TabsView from './views/tabs/TabsView.vue';

// fetchTest();
</script>

<template>
  <RouterView />
  <!-- <TabsView></TabsView> -->
</template>

<style scoped>
@import 'normalize.css';

#app {
  /** 字体抗锯齿，让字体看起来更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* font-size: 14px; */
}
</style>
