import { Axios } from '@/utils/request'
export function login(mobile, code) {
    return async (dispatch) => {
        const data = await Axios('/authorizations', 'post', { mobile, code })
        const { token } = data.data
        dispatch({ type: 'login/setToken', payload: token })
    }
}
export function getUserInfo() {
    return async (dispatch) => {
        const { data } = await Axios('/user/profile', 'get')
        dispatch({ type: 'user/getUserInfo', payload: data })
    }
}
export function loginOut() {
    return (dispatch) => {
        dispatch({ type: 'loginOut' })
    }
}