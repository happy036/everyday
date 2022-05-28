// 导入路由
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 导入页面组件
import Layout from "./pages/Layout";
import ProfileEdit from "./pages/Profile/Edit";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<Layout />}>
          <Route path="homepage" element={<Home/>}/>
          <Route path="profile" element={<Profile />}>
            <Route path="edit" element={<ProfileEdit/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
