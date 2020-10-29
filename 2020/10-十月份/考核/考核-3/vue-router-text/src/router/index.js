import { createRouter, createWebHashHistory } from "vue-router";
// 引入组件
import Home from "../components/Home";
// 定义路由
const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    {
        path: "/user",
        component: () => import('../components/User')
    },
    { path: '/about', redirect: '/setting' },
    {
        path: "/about",
        component: () => import('../components/About'),
        children: [
            {
                path: '/setting',
                component: () => import('../components/Setting')
            },
            {
                path: '/account',
                component: () => import('../components/Account')
            },
        ]
    },
    {
        path: '/userinfo/:id',
        component: () => import('../components/UserInfo'),
        props: true
    }
];

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    // 定义好的路由
    routes
});
// 导出
export default router;
