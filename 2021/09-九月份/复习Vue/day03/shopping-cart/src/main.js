import Vue from "vue";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios";
// 基础地址
axios.defaults.baseURL = 'https://www.escook.cn'
// axios方法添加到Vue的原型上
Vue.prototype.$axios = axios
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
