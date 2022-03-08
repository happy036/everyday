import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/assets/styles/common.less";
import TreeTable from "vue-table-with-tree-grid";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { locale: zhCn });
app.use(TreeTable);
app.mount("#app");
