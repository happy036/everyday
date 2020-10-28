import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: '范志伟',
      age: 22
    }
  },
  mutations: {
    changeAge(state) {
      state.age = 23
    }
  },
  actions: {},
  modules: {}
});
