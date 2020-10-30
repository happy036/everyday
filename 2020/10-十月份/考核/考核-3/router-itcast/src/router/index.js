import { createRouter, createWebHashHistory } from "vue-router";
import Users from "../components/Users";

const routes = [
  { path: '/', redirect: '/users' },
  {
    path: "/users",
    component: Users
  },
  {
    path: "/rights",
    component: () => import('../components/Rights')
  },
  {
    path: "/goods",
    component: () => import('../components/Goods')
  },
  {
    path: "/orders",
    component: () => import('../components/Orders')
  },
  {
    path: "/settings",
    component: () => import('../components/Settings')
  },
  {
    path: "/userinfo/:id",
    component: () => import('../components/UserInfo'),
    props: true
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
