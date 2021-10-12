const cookieparser = require('cookieparser')
export const state = () => {
    return {
        auth: ''
    }
}
export const mutations = {
    updateAuth(state, payload) {
        state.auth = payload
        console.log(state.auth)
    }
}
export const actions = {
    // 让vuex的用户信息数据持久化存储
    nuxtServeInit({ commit }, { req }) {
        let auth = ''
        // 通过cookie判断用户是否已经登录
        if (req.headers.cookie) {
            let parser = cookieparser.parser(req.headers.cookie)
            auth = parser.auth
        }
        commit('updateAuth', auth)
    }
}