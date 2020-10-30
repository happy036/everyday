import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: "曹操",
      count: 0,
      sum: 0
    };
  },
  mutations: {
    changeName(state) {
      state.name = "李四";
    },
    changeAname(state, bname) {
      state.name = bname;
    },
    add(state) {
      state.count++;
    },
    add2(state, val) {
      state.sum += val;
    }
  },
  actions: {
    asyncAdd(context, val) {
      setInterval(function () {
        context.commit("add2", val);
      }, 2000);
    }
  },
  getters: {
    sum1(state) {
      return state.sum
    }
  }
});
