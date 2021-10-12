import Vue from "vue";
import VueRouter from "vue-router";
import Find from "../views/Find.vue";
import My from "../views/My.vue";
import Part from "../views/Part.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: '/find',
    component: Find,
    name: 'Find'
  },
  {
    path: '/my',
    component: My,
    name: 'my'
  },
  {
    path: '/part',
    component: Part,
    name: 'part'
  },
];

const router = new VueRouter({
  routes,
});

export default router;
