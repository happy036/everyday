import { createRouter, createWebHashHistory } from "vue-router";
import About from "../components/About";
import Home from "../components/Home";
// 引入about子组件
import Phone from "../components/Phone";
import Er from "../components/Er";
const routes = [
    { path: "/", redirect: "/about" },
    {
        path: "/about",
        component: About,
        children: [
            { path: "/phone", component: Phone },
            { path: "/er", component: Er }
        ]
    },
    // props属性
    // { path: "/home/:id", component: Home, props: true }
    {
        path: "/home/:id",
        component: Home,
        props: router => ({ id: router.params.id, name: "zhangsan" })
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
