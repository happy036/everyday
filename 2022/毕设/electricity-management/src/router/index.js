import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/Home/HomePage";
const LoginPage = () => import("@/views/Login/LoginPage");
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    meta: { title: "首页" },
  },
  {
    path: "/user",
    component: HomePage,
    redirect: "/user/userList",
    name: "user",
    meta: { title: "用户管理" },
    children: [
      {
        path: "userList",
        component: () => import("@/components/userList"),
        name: "userList",
        meta: { title: "用户列表" },
      },
    ],
  },
  {
    path: "/rights",
    component: HomePage,
    redirect: "/rights/rightsList",
    name: "rights",
    meta: { title: "权限管理" },
    children: [
      {
        path: "rightsList",
        component: () => import("@/components/rightsList"),
        name: "rightsList",
        meta: { title: "权限列表" },
      },
      {
        path: "rolesList",
        component: () => import("@/components/rolesList"),
        name: "rolesList",
        meta: { title: "角色列表" },
      },
    ],
  },
  {
    path: "/goods",
    component: HomePage,
    redirect: "/goods/goodsList",
    name: "goods",
    meta: { title: "商品管理" },
    children: [
      {
        path: "goodsList",
        component: () => import("@/components/goodsList"),
        name: "goodsList",
        meta: { title: "商品列表" },
      },
      {
        path: "goodsClass",
        component: () => import("@/components/goodsClass"),
        name: "goodsClass",
        meta: { title: "分类参数" },
      },
    ],
  },
  {
    path: "/order",
    component: HomePage,
    redirect: "/order/orderList",
    name: "order",
    meta: { title: "订单管理" },
    children: [
      {
        path: "orderList",
        component: () => import("@/components/orderList"),
        name: "orderList",
        meta: { title: "订单列表" },
      },
    ],
  },
  {
    path: "/login",
    component: LoginPage,
    name: "Login",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // 获取token
  const isAuthenticated = window.localStorage.getItem("dsgl");
  // console.log(window.localStorage.getItem("dsgl"));
  if (to.name !== "Login" && !isAuthenticated) next({ path: "/login" });
  else next();
});
export default router;
