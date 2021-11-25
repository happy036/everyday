import { createRouter, createWebHashHistory } from "vue-router";
import Carousel from "../components/Carousel.vue";

const routes = [
  {
    path: "/carousel",
    component: Carousel,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
