import { createRouter, createWebHashHistory } from "vue-router";
const HomePage = () => import("@/views/Home/HomePage");
import TopCategoryPage from "@/views/category/TopCategoryPage";
import subCategoryPage from "@/views/category/SubCategoryPage";
const GoodsDetailPage = () => import("@/views/goods/GoodsDetailPage");
import LoginPage from "@/views/login/LoginPage";
const LoginCallbackPage = () =>
  import("@/views/login/components/LoginCallbackPage");
const CartPage = () => import("@/views/cart/cartPage");
import { authGuard } from "@/router/authGuard";
const CheckoutPage = () => import("@/views/pay/CheckoutPage");
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
  {
    path: "/goods/:id",
    component: GoodsDetailPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/login/callback",
    component: LoginCallbackPage,
  },
  { path: "/cart", component: CartPage },
  { path: "/checkout/order", component: CheckoutPage },
];

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHashHistory(),
  routes,
});
// 检测用户是否登录
router.beforeEach(authGuard);
export default router;
