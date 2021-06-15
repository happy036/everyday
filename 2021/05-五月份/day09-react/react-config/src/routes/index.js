import About from "../components/About";
import AboutHer from "../components/AboutHer";
import AboutMine from "../components/AboutMine";
import Home from "../components/Home";
import Login from "../components/Login";
const routes = [
  {
    path: '/home',
    component: Home
  }, {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/mine',
        component: AboutMine
      }, {
        path: '/about/her',
        component: AboutHer
      }
    ]
  }, {
    path: '/login',
    component: Login
  }
]
export default routes