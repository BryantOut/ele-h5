<script setup lang="ts">
import { RouterView } from 'vue-router';
import { fetchTest } from '@/api/test';
// import TabsView from './views/tabs/TabsView.vue';

fetchTest();
</script>

<template>
  <RouterView />
  <!-- <TabsView></TabsView> -->
</template>

<style scoped></style>
