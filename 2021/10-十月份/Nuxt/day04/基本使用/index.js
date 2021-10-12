// 存储公共数据
export const state = () => {
    return {
        count: 0
    }
}
// 定义muations完成数据的同步修改
export const mutations = {
    // 同步加
    increment(state, payload) {
        state.count += payload
    }
}
// 定义actions 完成数据的异步修改
export const actions = {
    asyncIncrement({ commit }, payload) {
        setTimeout(function () {
            commit('increment', payload)
        }, 1000)
    }
}