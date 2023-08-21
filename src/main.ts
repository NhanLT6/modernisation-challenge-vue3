import { createApp } from 'vue';

import { createPinia } from 'pinia';
import Toast, { POSITION, PluginOptions as ToastOptions } from 'vue-toastification';

import './style.css';
import 'vue-toastification/dist/index.css';

import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();

const toastOptions: ToastOptions = {
  position: POSITION.TOP_CENTER,
  hideProgressBar: true,
  transition: 'Vue-Toastification__fade',
  maxToasts: 1,
};

app.use(pinia);
app.use(Toast, toastOptions);

app.mount('#app');
