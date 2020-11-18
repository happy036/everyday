import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 使用ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 使用axios
import axios from "axios";
const app = createApp(App);
axios.defaults.baseURL = "http://www.wanlum.com:8888/api/private/v1/";
app.config.globalProperties.$axios = axios;

app
  .use(router)
  .use(Antd)
  .mount("#app");
