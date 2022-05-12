import { Axios } from '@/utils/request'
// 获取频道
export const getChannels = () => {
    return async (dispatch) => {
        const { data } = await Axios('/channels', 'get')
        dispatch({ type: 'atricle/setChannels', payload: data.channels })
    }
}
// 获取文章数据
export const getArticles = (params) => {
    return async (dispatch) => {
        const { data } = await Axios('mp/articles', 'get', params)
        dispatch({ type: 'atricle/setAtricles', payload: data })
    }
}
// 删除文章
export const delArticle = (id) => {
    return async (dispatch) => {
        await Axios(`mp/articles/${id}`, 'delete')
    }
}
export const editArticle = (data, draft = false) => {
    return async dispatch => {
        await Axios(`mp/articles/${data.id}?draft=${draft}`, 'put', data)
    }
}

export const getArticle = id => {
    return async dispatch => {
        const data = await Axios('mp/articles/' + id, 'get')
        return data.data
    }
}