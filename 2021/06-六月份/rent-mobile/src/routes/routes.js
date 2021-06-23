import { Redirect } from "react-router-dom";
// 导入组件
import App from "../App";
import Home from "../pages/Home/Home";
// import CityList from "../pages/CityList/CityList";
import FindHouse from "../pages/FindHouse/FindHouse";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";

const routes = [{
    path: '/',
    component: App,
    routes: [
        {
            path: '/',
            exact: true,
            render: () => (
                <Redirect to={'/home'} />
            )
        }, {
            path: '/home',
            component: Home,
        },
        {
            path: '/findhouse',
            component: FindHouse,
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/profile',
            component: Profile,
        }
    ]
}]
export default routes