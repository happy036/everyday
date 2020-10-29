import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home";
import About from "../components/About";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about/:id",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
    component: About,
    props: router => ({ id: router.params.id, name: "张三" })
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
