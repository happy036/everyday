// 引入
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";
import About from "../components/About";
// 定义路由
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  // 根据不同的id，显示不同的内容
  // 在组件中通过props属性获取id的值
  {
    path: "/about/:id", component: About,
    props: router => ({ name: 'zhangsan', id: router.params.id })
  }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
export default router;
