// 导入路由
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 导入页面组件
import Layout from "./pages/Layout";
import ProfileEdit from "./pages/Profile/Edit";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Article from "./pages/Article";
import Question from "./pages/QuestionPage";
import Video from "./pages/VideoPage";
import SearchPage from "./pages/SearchPage";
import Result from "./pages/SearchPage/Result";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="homepage" element={<Home />} />
          <Route path="profile" element={<Profile />}></Route>
          <Route path="question" element={<Question />}></Route>
          <Route path="video" element={<Video />}></Route>
        </Route>
        <Route path="/articles/:artId" element={<Article />}></Route>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/result" element={<Result />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
