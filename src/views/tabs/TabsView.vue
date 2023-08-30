<script setup lang="ts">
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';

// 记录当前选择的tab
const active = ref('home');
</script>

<template>
  <div>{{ active }}</div>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="order" icon="bars">订单</van-tabbar-item>
    <van-tabbar-item name="me" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>
