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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
