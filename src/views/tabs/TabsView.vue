<script setup lang="ts">
// import { Tabbar, TabbarItem } from 'vant';
import { RouterView, useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const route = useRoute(); // 获取当前路由状态
const router = useRouter(); // 获取路由实例

// 记录当前选择的tab
const active = ref(route.name as string);

watch(active, (nv) => {
  router.push({
    name: nv,
  });
});
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="order" icon="bars">订单</van-tabbar-item>
    <van-tabbar-item name="me" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>
