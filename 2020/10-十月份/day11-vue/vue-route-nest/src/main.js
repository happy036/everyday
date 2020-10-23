import { createApp } from "vue";
// import { createApp } from "vue";
import App from "./App.vue";
// 导入路由
import routers from "./routers";
const app = createApp(App);

// 挂载路由
app.use(routers);
app.mount("#app");
