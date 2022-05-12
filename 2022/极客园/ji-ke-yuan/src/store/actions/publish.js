import { Axios } from "@/utils/request"

export const addArticle = (data, draft = false) => {
    return async dispatch => {
        await Axios(`mp/articles?draft=${false}`, 'post', data)
    }
}