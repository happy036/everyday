import { createApp } from "vue";
import App from "./App.vue";
// import { add, minus } from "./assets/js/index";
import op from "./assets/js/index";
console.log(op.add(1, 2), op.minus(3, 1));
createApp(App).mount("#app");
