import { createApp } from 'vue';

import { createPinia } from 'pinia';
import Toast, {
  POSITION,
  PluginOptions as ToastOptions,
} from 'vue-toastification';

import './style.css';
import 'vue-toastification/dist/index.css';

import App from './App.vue';

const pinia = createPinia();
const app = createApp(App);

const toastOptions: ToastOptions = {
  position: POSITION.BOTTOM_RIGHT,
  hideProgressBar: true,
};

app.use(pinia);
app.use(Toast, toastOptions);

app.mount('#app');
