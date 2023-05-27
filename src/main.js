import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "./style.css";

import App from "./App.vue";
import router from "./router";

import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";

const app = createApp(App);

app.use(createPinia()).use(PrimeVue).use(router).mount("#app");
