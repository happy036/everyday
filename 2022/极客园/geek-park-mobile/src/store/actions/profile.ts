import { Axios } from "../../utils/http"
import { RootThunkAction } from "../../type/store"
// import { User } from "../../type/data"
// 获取用户信息
export const getUser = (): RootThunkAction => {
    return async (dispatch) => {
        const { data} = await Axios('/user', 'get')
        dispatch({type:'profile/getUser',payload:data})
    }
}
// 获取个人信息
export const getUserProfile = (): RootThunkAction => {
    return async (dispatch) => {
        const res = await Axios('user/profile', 'get')
        dispatch({type:'profile/getUserProfile',payload:res.data.data})
    }
}