<script setup lang="ts">
import TheTop from './components/TheTop.vue';
import { useToggle } from '@/use/useToggle';
import SearchView from '@/views/search/searchView.vue';
import { fetchHomePageData } from '@/api/home';
import { useAsync } from '@/use/useAsync';
import type { IHomeInfo } from '@/types';
import OpLoadingView from '@/components/OpLoadingView.vue';
import TheTransformer from './components/TheTransformer.vue';
import ScrollBar from './components/ScrollBar.vue';

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

const { data, pending } = useAsync(fetchHomePageData, {} as IHomeInfo);
</script>

<template>
  <div class="home-page">
    <Transition name="fade">
      <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView"></SearchView>
    </Transition>
    <TheTop :recomments="recomments" @searchClick="toggleSearchView" />
    <OpLoadingView :loading="pending" type="skeleton">
      <!-- {{ data }} -->
      <TheTransformer :data="data.transformer"></TheTransformer>
      <ScrollBar :data="data.scrollBarInfoList" />
    </OpLoadingView>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home-page {
  background: var(--op-gray-bg-color);
  // padding-bottom: 70px;
}
</style>
