import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: '范志伟',
      age: 22,
      count: 0,
      sum: 0
    }
  },
  mutations: {
    changeAge(state) {
      state.age = 23
    },
    changeName(state, name1) {
      state.name = name1
    },
    add(state) {
      state.count++
    },
    add2(state, val) {
      state.sum += val
    }
  },
  actions: {
    asyncAdd2(context, val) {
      setInterval(function () {
        context.commit('add2', val)
      }, 2000)
    }
  },
  getters: {
    num(state) {
      return state.count
    }
  }
});
