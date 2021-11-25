import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import library from "@/components/library/index";
createApp(App).use(router).use(library).mount("#app");
