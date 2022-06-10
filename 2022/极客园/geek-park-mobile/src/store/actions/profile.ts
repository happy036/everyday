import { Axios } from "../../utils/http"
import { RootThunkAction } from "../../type/store"
import { UserProfile } from "../../type/data"

// 获取用户信息
export const getUser = (): RootThunkAction => {
  return async (dispatch) => {
        const { data } = await Axios('/user', 'get')
        dispatch({type:'profile/getuser',payload:data})
    }
}
// 获取个人信息
export const getUserProfile = (): RootThunkAction => {
    return async (dispatch) => {
      const res = await Axios('user/profile', 'get')
        dispatch({type:'profile/getUserProfile',payload:res.data})
    }
}
// 更新头像
export const updatePhoto = (file: FormData):RootThunkAction => {
  return async (dispatch) => {
    const res = await Axios('/user/photo','patch', file);
    // console.log(res)
    dispatch({ type: 'profile/photo', payload: res.data.photo });
  };
};

export const updateUserProfile = (userProfile: Partial<UserProfile>):RootThunkAction => {
  return async (dispatch) => {
    await Axios('/user/profile','patch', userProfile);
    dispatch({ type: 'profile/update', payload: userProfile });
  };
};