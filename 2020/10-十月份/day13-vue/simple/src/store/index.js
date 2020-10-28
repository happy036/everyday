// 引入
import { createStore } from "vuex";
// 配置
export default createStore({
  // 存数据的
  state() {
    return {
      name: "范志伟",
      hobbies: "爱吃屎",
      sex: '男',
    };
  },
  // 存方法的（存同步方法 存异步方法）
  mutations: {
    changeSex(state) {
      state.sex = '狗'
    }
  },
  actions: {},
  // 存computed
  getters: {}
});
