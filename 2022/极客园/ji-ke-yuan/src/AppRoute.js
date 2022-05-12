import { Navigate, useRoutes } from "react-router-dom";
import Login from './pages/Login'
import Layout from './pages/Layout'
import AuthRoute from "./components/AuthRoute";
import LazyRouter from "./components/LazyRouter";
import { lazy } from "react";
import Publish from "./pages/Publish";
const Dashboard = LazyRouter(lazy(() => import('@/pages/Dashboard')))
const Article = LazyRouter(lazy(() => import('@/pages/Article')))
const routes = [
    { path: '/login', element: <Login /> },
    { path: '/', element: <Navigate to='/dashboard' /> },
    {
        element: <AuthRoute><Layout /></AuthRoute>,
        children: [
            { path: '/dashboard', element: <Dashboard /> },
            { path: '/article', element: <Article /> },
            { path: '/publish', element: <Publish /> }
        ]
    }
]
function AppRoute() {
    let element = useRoutes(routes)
    return element
}
export default AppRoute