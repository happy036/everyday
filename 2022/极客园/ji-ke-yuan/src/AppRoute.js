import { useRoutes } from "react-router-dom";
// import Home from './pages/Home'
import Login from './pages/Login'
import Layout from './pages/Layout'
const routes = [
    { path: '/', element: <Layout /> },
    { path: '/login', element: <Login /> }
]
function AppRoute() {
    let element = useRoutes(routes)
    return element
}
export default AppRoute