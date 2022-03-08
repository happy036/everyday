import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default function useLoginAfter() {
  // 获取 store 对象
  const store = useStore();
  // 获取 router 对象
  const router = useRouter();
  // 登录成功之后做的事情
  const loginSuccessful = (result) => {
    // console.log(result);
    if (result.code === 0)
      return ElMessage({
        message: result.msg,
        type: "warning",
      });
    // 存储用户信息
    store.commit("user/setUser", {
      // 用户id
      id: result.data.id,
      // 用户名
      username: result.data.username,
      // 用户手机号
      mobile: result.data.mobile,
      // 用户登录凭证
      token: result.data.token,
    });
    // 跳转到首页
    router.push("/").then(() => {
      // 登录成功之后的提示信息
      ElMessage({
        message: "登录成功",
        type: "success",
      });
    });
  };
  // 登录失败之后做的事情
  const loginFailed = (error) => {
    console.log(error);
    // 登录失败之后的提示信息
    ElMessage({
      message: error,
      type: "error",
    });
  };

  return { loginSuccessful, loginFailed };
}
