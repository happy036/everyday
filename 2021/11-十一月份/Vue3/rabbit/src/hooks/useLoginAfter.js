import { useStore } from "vuex";
import Message from "@/components/library/Message";
import { useRoute, useRouter } from "vue-router";
export default function useLoginAfter() {
  // 获取store对象
  const store = useStore();
  // 获取router对象
  const router = useRouter();
  const route = useRoute();
  // 登录成功之后做的事情
  const loginSuccessful = (data) => {
    // 存储用户信息
    store.commit("user/setUser", {
      id: data.result.id,
      avatar: data.result.avatar,
      nickname: data.result.nickname,
      account: data.result.account,
      mobile: data.result.mobile,
      token: data.result.token,
    });
    // 跳转到目标地址
    // 判断路由查询参数 redirectUrl 是否存在, 如果存在跳转到目标地址, 如果不存在跳转到首页
    const redirectURL = route.query.redirectUrl;
    // 跳转到首页
    router.push(redirectURL || "/").catch(() => {});
    // 登录成功的提示
    Message({ type: "success", text: "登录成功" });
    // 合并购物车
    store.dispatch("cart/mergedCart").catch((error) => {
      console.log(error);
    });
    // 将服务器端购物车数据同步到本地
    store.dispatch("cart/updateCartList").catch((error) => {
      console.log(error);
    });
  };
  const loginFail = () => {
    Message({ type: "error", text: "登录失败" });
  };
  return {
    loginSuccessful,
    loginFail,
  };
}
