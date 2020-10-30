import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About"),
    children: [
      {
        path: "/login/:name",
        component: () => import("../components/Login"),
        props: true
      },
      {
        path: "/back/:name",
        component: () => import("../components/Back"),
        name: "back",
        props: true
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
