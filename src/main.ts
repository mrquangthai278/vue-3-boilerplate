import { createPinia } from 'pinia';
import { createApp } from 'vue';

import '@/assets/styles/main.css';

import App from './App.vue';
import { i18n } from './locales';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPlus);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.mount('#app');
