import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
  {
    path: "/", redirect: '/login'
  },
  {
    name: 'Login', path: "/login", component: Login
  },
  {
    name: 'Home', path: '/home', component: () => import('../views/Home'),
    children: [
      { path: "/home", redirect: '/welcome' },
      { path: '/welcome', component: () => import('../components/Welcome') },
      { path: '/userlist', component: () => import('../components/UserList') }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
// 定义路由导航守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = window.sessionStorage.getItem('token')
  if (to.name != 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
export default router;
