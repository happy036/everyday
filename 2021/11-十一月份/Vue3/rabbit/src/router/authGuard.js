import store from "@/store";

export function authGuard(to, from, next) {
  // 在设计路由的时候做了一项硬性规定, 路由地址凡是以 /checkout 或者 /member 开头, 这样的路由就需要登录
  const requireLogin = ["checkout", "member"];
  if (requireLogin.includes(to.path.split("/")[1])) {
    // 说明用户访问的页面是需要登录的
    // 判断用户是否登录
    if (store.state.user.profile.token) {
      next();
    } else {
      // 说明用户访问的页面需要登录但是用户没有登录
      next({ path: "/login", query: { redirectUrl: to.fullPath } });
    }
  } else {
    // 说明用户访问的页面是不需要登录的
    next();
  }
}
