import { createStore } from "vuex";
import user from "@/store/user";
import cart from "@/store/cart";
import category from "@/store/category";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    createPersistedState({
      // 数据存储在localStorage时的key
      key: "rabbit",
      // 指定将哪些模块中的数据同步到本地
      paths: ["user", "cart"],
    }),
  ],
});
