<script setup lang="ts">
import TheTop from './components/TheTop.vue';
import { useToggle } from '@/use/useToggle';

const recomments = [
  {
    value: 1,
    label: '牛腩',
  },
  {
    value: 2,
    label: '色拉',
  },
];

const [isSearchViewShow, toggleSearchView] = useToggle(false);
</script>

<template>
  <div class="home-page">
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    <div v-if="isSearchViewShow">123</div>
  </div>
</template>

<style scoped></style>
