import { createRouter, createWebHashHistory } from "vue-router";
const HomePage = () => import("@/views/Home/HomePage");
import oneCategoryPage from "@/views/category/oneCategoryPage";
import twoCategoryPage from "@/views/category/twoCategoryPage";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  { path: "/category/:id", component: oneCategoryPage },
  { path: "/category/two/:id", component: twoCategoryPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
