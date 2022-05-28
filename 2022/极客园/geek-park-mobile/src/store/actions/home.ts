import { RootThunkAction } from "../../type/store"
import { Channel } from "../../type/data"
import { Axios } from "../../utils/http"
import { store } from ".."
import differenceBy from 'lodash/differenceBy'
// 本地存储 频道 的 key
const CHANNEL_KEY = 'root'
// 获取用户的频道
export const getUserChannel = ():RootThunkAction => {
    return async (dispatch) => {
        const { login: { token } } = store.getState()
        if (token) {
            // 登录
            const { data } = await Axios('/user/channels', 'get')
            dispatch({type:'home/getChannels',payload:data.channels})
        } else {
            // 如果没登录，先判断本地缓存中有没有频道列表数据
            const localChannels = JSON.parse(localStorage.getItem(CHANNEL_KEY) ?? '[]') as Channel[]
            if (localChannels.length === 0) {
                // 如果没有就发送请求获取默认的频道列表数据，并存储到本地缓存中
                const {data} = await Axios('/user/channels', 'get')
                localStorage.setItem(CHANNEL_KEY, JSON.stringify(data.channels))
                dispatch({type:'home/getChannels',payload:data.channels})
            } else {
                // 如果有，拿到本地的频道列表数据
                dispatch({type:'home/getChannels',payload:localChannels})
            }
        }
    }
}
// 获取所有频道列表
export const getAllChannels = ():RootThunkAction => {
    return async (dispatch)=>{
        const {Home:{userChannel}}=store.getState()
        const {data}=await Axios('channels','get')
        const restChannels=differenceBy(
            data.channels,userChannel,'id'
        )
        dispatch({type:'home/getAllChannel',payload:restChannels})
    }
}
// 频道管理，删除频道
export const delChannel=(channel:Channel):RootThunkAction=>{
    return async (dispatch)=>{
        const {login:{token}}=store.getState()
        if(token){
            // 已登录
            await Axios(`/user/channels/${channel.id}`,'delete')
        }else {
            // 未登录
            const localChannels=JSON.parse(
                localStorage.getItem(CHANNEL_KEY)??'[]'
            )as Channel[]
            const userChannel=localChannels.filter((item)=>item.id!==channel.id)
            localStorage.setItem(CHANNEL_KEY,JSON.stringify(userChannel))
            dispatch({type:'home/delChannel',payload:channel})
        }
    }
}
// 添加频道
export const addChannel=(channel:Channel):RootThunkAction=>{
    return async (dispatch)=>{
        const {login:{token}}=store.getState()
        if (token){
            await Axios('/user/channels','patch',{channels:[channel]})
        }else {
            const localChannels=JSON.parse(localStorage.getItem(CHANNEL_KEY)??'[]') as Channel[]
            const userChannel=[...localChannels,channel]
            localStorage.setItem(CHANNEL_KEY,JSON.stringify(userChannel))
        }
        dispatch({type:'home/addChannel',payload:channel})
    }
}
