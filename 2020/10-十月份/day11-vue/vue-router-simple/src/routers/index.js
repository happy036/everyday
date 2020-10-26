// 引入
import { createRouter, createWebHashHistory } from "vue-router";
// 引入组件
import About from "../components/About";
import Home from "../components/Home";
// 定义路由
const router = [
  { path: '/', component: About },
  { path: '/home', component: Home }
]
// 创建路由
const routers = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  router
})
// 导出路由
export default routers