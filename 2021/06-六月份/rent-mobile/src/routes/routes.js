import { Redirect } from "react-router-dom";
// 导入组件
import App from "../App";
import Home from "../pages/Home/Home";
import CityList from "../pages/CityList/CityList";
import FindHouse from "../pages/FindHouse/FindHouse";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Map from "../pages/Map/Map.jsx";
import Search from "../pages/Search/Search.jsx";

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
            path: '/citylist',
            component: CityList,
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
        },
        {
            path: '/map',
            component: Map
        },
        {
            path: '/search',
            component: Search
        }
    ]
}]
export default routes