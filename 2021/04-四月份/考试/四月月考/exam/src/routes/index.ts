import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import One from "../components/One.vue";
import Two from "../components/Two.vue";
import Three from "../components/Three.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/one',
    component: One
  }, {
    path: '/two',
    component: Two
  }, {
    path: '/three',
    component: Three
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router