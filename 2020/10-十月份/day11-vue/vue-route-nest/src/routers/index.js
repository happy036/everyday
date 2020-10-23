// 引入
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
// 导入about中的子组件
import Org from "../components/Org";
import Connect from "../components/Connect";

import Zhang from "../components/Zhang";
import Er from "../components/Er";
// 定义路由
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "/org",
        component: Org
      },
      {
        path: "/connect",
        component: Connect
      }
    ]
  },
  {
    path: "/login",
    component: Login,
    children: [
      {
        path: "/zhang",
        component: Zhang
      },
      {
        path: "/er",
        component: Er
      }
    ]
  }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  // 定义好的路由
  routes
});
export default router;
