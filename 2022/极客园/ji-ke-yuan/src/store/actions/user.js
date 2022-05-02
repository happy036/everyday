import { setToken, http } from '@/utils'
export function login(mobile, code) {
    return async dispatch => {
        const data = await http.post('/authorizations', { mobile, code })
        setToken(data.token)
        dispatch({ type: 'login/setToken', payload: data.token })
    }
}