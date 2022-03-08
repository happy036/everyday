import axios from "axios";
import store from "@/store";
import router from "@/router";
// 2. 创建 baseURL变量用于存储基准的请求地址
// 开发环境
// const baseURL = "http://pcapi-xiaotuxian-front-devtest.itheima.net/";
// 线上环境
const baseURL = "http://localhost:3000";
// 1. 创建一个新的axios实例对象，专门用于配置和小兔仙应用相关的请求
// 携带token
const instanceWithToken = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
// 不携带token
const instanceWithoutToken = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});
// 3. 配置请求拦截器 携带token
instanceWithToken.interceptors.request.use((config) => {
  // 判断token是否存在
  const token = store.state.user.profile;
  // 如果token存在
  if (token) {
    // 将token存储在请求头中
    config.headers.Authorization = `Bearer ${token.token}`;
  }
  // 不返回,相当于没修改
  return config;
});

// 配置响应拦截器
instanceWithToken.interceptors.response.use(
  (response) => {
    // 如果服务端返回的是表示成功的状态码，走这个回调函数
    // 服务器端做出响应之后，先走当前回调函数
    return response.data;
  },
  (error) => {
    // 检查token是否过期
    if (error.response.status === 401) {
      // 跳转到登录页面
      router.push("login").then(() => {
        console.log("登录失败");
      });
      //清空用户信息
      store.commit("user/setUser", {});
    }
    return Promise.reject(error);
  }
);
// 不携带token
instanceWithoutToken.interceptors.response.use((response) => {
  return response.data;
});
function generateRequest(url, method, data) {
  return {
    url: url,
    method: method,
    [method === "get" ? "params" : "data"]: data,
  };
}
// 用于发送请求的函数
export function requestWithToken(url, method, data) {
  return instanceWithToken(generateRequest(url, method, data));
}
export function requestWithoutToken(url, method, data) {
  return instanceWithoutToken(generateRequest(url, method, data));
}
