import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 

import './main_style.scss'


import { createApp } from 'vue'
import { createPinia } from "pinia";

import App from './App.vue'
import router from "./router/router.js";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
const pinia = createPinia();


app.use(router);
app.use(pinia);

app.use(VueLazyLoad, {
  lazyComponent: true,
  loading: "loading.jpg",
  error: "error.jpg",
});

app.mount('#app');