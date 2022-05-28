import { Channel } from "../../type/data"
import {HomeAction} from '../../type/store'
import {sortBy} from "lodash";
type HomeState = {
    userChannel: Channel[],
    restChannel:Channel[],
    channelActively:string
}
const initialState: HomeState = {
    userChannel:[],
    restChannel:[],
    channelActively:''
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
                ...state,
                userChannel: [...state.userChannel, action.payload],
                restChannel: state.restChannel.filter(
                    item => item.id !== action.payload.id,
                )
            }
        default:
            return state;
    }
}
export default Home
