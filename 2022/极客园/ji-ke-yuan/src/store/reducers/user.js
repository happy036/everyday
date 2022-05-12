const initialState = {
    token: '',
    userInfo: {}
}
export default function user(state = initialState, action) {
    switch (action.type) {
        case 'login/setToken':
            return {
                ...state,
                token: action.payload
            }
        case 'user/getUserInfo':
            return {
                ...state,
                userInfo: action.payload
            }
        case 'loginOut':
            return initialState
        default:
            return state
    }
}
