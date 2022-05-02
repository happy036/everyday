import { getToken } from '@/utils/auth'
const initialState = {
    token: getToken()
}
export default function user(state = initialState, action) {
    return state
}
