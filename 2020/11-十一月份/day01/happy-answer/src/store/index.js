import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      // 第几周
      level: '第一周',
      // 第几题
      itemNum: 1,
      questions: [],
      // 答案Id
      answerId: []
    }
  },
  mutations: {
    // 初始化数据
    initData(state, res) {
      state.questions = res.data
    },
    remberId(state, id) {
      state.answerId.push(id)
    },
    addItem(state, num) {
      state.itemNum += num
    },
    cleanItem(state, sum) {
      state.itemNum = sum
      state.answerId = []
    }
  },
  actions: {
    // 获取数据
    async getData(context) {
      let res = await axios.get('/data/question.json')
      context.commit('initData', res)
    },
    addNum(context, id) {
      context.commit('remberId', id)
      if (context.state.itemNum < context.state.questions.length) {
        context.commit('addItem', 1)
      }
    },
    clearNum(context, sum) {
      context.commit('cleanItem', sum)
    }
  },
  modules: {}
});
