import { createStore } from "vuex";
import user from "@/store/user";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    profile: {
      id: "",
      username: "",
      mobile: "",
      token: "",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
  plugins: [
    createPersistedState({
      // 数据存储在 localStorage 时的 key
      key: "dsgl",
      // 指定将哪些模块中的数据同步到本地
      paths: ["user"],
    }),
  ],
});
