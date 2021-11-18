import { createRouter, createWebHashHistory } from "vue-router";
const HomePage = () => import("@/views/Home/HomePage");
import oneCategoryPage from "@/views/category/oneCategoryPage";
import twoCategoryPage from "@/views/category/twoCategoryPage";
// 主页
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  // 一级分类路由
  { path: "/category/:id", component: oneCategoryPage },
  // 二级分类
  { path: "/category/two/:id", component: twoCategoryPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
