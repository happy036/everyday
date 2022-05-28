import { ThunkAction } from 'redux-thunk';
import store from '../store';
import { Channel, Token,User,UserProfile } from './data';
// 获取 redux 状态的类型
export type RootState = ReturnType<typeof store.getState>;
// 第一个类型参数：thunk action 返回值类型
// 第二个类型参数：Redux 状态的类型
// 第三个类型参数：thunk action 额外参数的类型
// 第四个类型参数：Redux 中所有 action 的类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>;

// 项目中所有 action 的类型
type RootAction = unknown |LoginAction |ProfileAction|HomeAction;

// -------------------- Redux 对象形式的 action 的类型 ---------------------------

// 登录相关的 action 类型
export type LoginAction = {
    type: 'login/token';
    payload:Token
}
// 个人中心相关的 action 类型
export type ProfileAction = {
    type: 'profile/getuser';
    payload:User
}|{
    type: 'profile/getUserProfile',
    payload:UserProfile
}
// 首页
export type HomeAction = {
    type: 'home/getChannels';
    payload:Channel[]
}|{
    type:'home/getAllChannel';
    payload:Channel[]
}|
    {
        type:'home/changeTab';
        payload:string
    }|{
    type:'home/delChannel';
    payload:Channel;
}|{
    type:'home/addChannel';
    payload:Channel;
}
// 等等
