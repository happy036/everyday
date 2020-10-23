// 引入
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";
import About from "../components/About";
// 定义路由
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
export default router;
