import { Channel,Articles } from "../../type/data"
import {HomeAction} from '../../type/store'
import {sortBy} from "lodash";
type HomeState = {
    userChannel: Channel[],
    restChannel:Channel[],
    channelActively: string,
    channelArticles: {
        [key:number]:Articles;
    }
}
const initialState: HomeState = {
    userChannel:[],
    restChannel:[],
    channelActively: '',
// 频道文章列表
    channelArticles:{}
}
const Home = (state = initialState, action: HomeAction): HomeState => {
    switch (action.type) {
        case 'home/getChannels':
            return {
                ...state,
                userChannel:action.payload,
                // 高亮选中设置默认值
                channelActively:action.payload[0]?.id+''
            }
        case 'home/getAllChannel':
            return {
                ...state,
                restChannel:action.payload
            }
        case 'home/changeTab':
            return {
                ...state,
                channelActively:action.payload
            }
        case 'home/delChannel':
            return {
                ...state,
                // 删除当前频道
                userChannel:state.userChannel.filter((item)=>item.id!==action.payload.id),
                // 把被删除频道添加到推荐频道中，并且根据id进行排序
                restChannel:sortBy([...state.restChannel,action.payload],'id')
            }
        case 'home/addChannel':
            return {
                // 添加频道
                ...state,
                userChannel: [...state.userChannel, action.payload],
                restChannel: state.restChannel.filter(
                    item => item.id !== action.payload.id,
                )
            }
        case 'home/getChannelArticles':
            const { channelId, data: { pre_timestamp, results } } = action.payload
            // 判断当前频道数据是否存在，如果不存在，那么就没有 results，此时就设置默认值为：[]
            const curChannelArticles = state.channelArticles[channelId]?.results??[]
            return {
                ...state, channelArticles: {
                    ...state.channelArticles,
                    [channelId]: {
                        pre_timestamp,
                        results:[...curChannelArticles,...results]
                    }
                }
            }
        case 'home/getNewestArticleList':
            // 判断当前频道数据是否存在，如果不存在，那么就没有 results，此时就设置默认值为：[]
            const currentResults = state.channelArticles[channelId]?.results ?? []
            return {
                ...state, 
                channelArticles: {
                    ...state.channelArticles, [channelId]: {
                        pre_timestamp,results:[...results,...currentResults]
                    }
                }
            }
        default:
            return state;
    }
}
export default Home
