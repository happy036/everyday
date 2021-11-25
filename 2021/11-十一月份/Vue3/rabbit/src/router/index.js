import { createRouter, createWebHashHistory } from "vue-router";
const HomePage = () => import("@/views/Home/HomePage");
import TopCategoryPage from "@/views/category/TopCategoryPage";
import subCategoryPage from "@/views/category/subCategoryPage";
// 主页
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  // 一级分类路由
  { path: "/category/:id", component: TopCategoryPage },
  // 二级分类
  { path: "/category/two/:id", component: subCategoryPage },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes,
});

export default router;
