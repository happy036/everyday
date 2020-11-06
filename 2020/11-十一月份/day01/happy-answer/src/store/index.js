import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {
      // 第几周
      level: '第一周',
      questions: [],
      // 题号
      itemNum: 1,
      answerId: []
    }
  },
  mutations: {
    // 初始化数据
    initData(state, res) {
      state.questions = res.data
      // console.log(state.questions)
    },
    // 把答案id存入answerId
    remberId(state, id) {
      state.answerId.push(id)
    },
    // 题号增加
    addItem(state, num) {
      state.itemNum += num
    },
    // 题号重置为1,answerId清空
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
      // 判断itemNum是不是大于questions的长度
      if (context.state.itemNum < context.state.questions.length) {
        context.commit('addItem', 1)
      }
    },
    // 清空answerId和itemNum
    cleanNum(context, sum) {
      context.commit('cleanItem', sum)
    }
  },
  modules: {}
});
