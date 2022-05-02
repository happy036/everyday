import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function AuthGuard({ children }) {
    // 调用鉴权钩子, 获取异步状态及鉴权结果
    const { auth, loading } = useAuth();
    // 如果异步状态为等待, 渲染等待过程中的UI界面
    if (loading) return <div>loading...</div>;
    // 判断鉴权结果, 如果通过, 进入目标路由组件, 如果没通过, 重定向到执行授权的页面
    return auth ? children : <Navigate to="/login" />;
}

export default AuthGuard;