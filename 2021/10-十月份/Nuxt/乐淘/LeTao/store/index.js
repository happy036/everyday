const cookieParser = require('cookieparser')
export const state = () => {
    return {
        token: '',
        userInfo: {} //用户信息
    }
}
export const mutations = {
    // 存储token
    setToken(state, token) {
        state.token = token
    },
    // 存储用户信息
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo
    }
}