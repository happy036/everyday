import { RootThunkAction } from "../../type/store";
import {Axios }from '../../utils/http'
// login的参数类型
type LoginParams = { mobile: string; code: string }
// 登录
export const login = (values: LoginParams): RootThunkAction => {
    return async (dispatch:any) => {
        const {data} = await Axios('/authorizations', 'post', values)
        localStorage.setItem('root', JSON.stringify(data))
        dispatch({type:'login/token',payload:data})
    }
}
// 获取验证码
export const getCode = (mobile: string):RootThunkAction => {
    return async () => {
        await Axios(`/sms/codes/${mobile}`,'get')
    }
}
// 退出
export const logout = ():RootThunkAction => {
  return (dispatch) => {
    // 清空本地缓存中 token
    localStorage.removeItem('root')
    // 清空 redux 中存储的 token
    dispatch({ type: 'login/logout' });
  };
};