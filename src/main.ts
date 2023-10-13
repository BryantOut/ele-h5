// import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vant/lib/index.css';
import './assets/common.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const rootValue = 16; // 设计稿中的body
const rootWidth = 390; // 设计稿中俄屏幕
const deviceWidth = document.documentElement.clientWidth; // 屏幕
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'; // body

app.mount('#app');
