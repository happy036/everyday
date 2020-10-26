import { createApp } from "vue";
import App from "./App.vue";
// 导入路由
import routers from "./routers";
const app = createApp(App)
app.use(routers)
app.mount('#app')