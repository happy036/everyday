import { Token } from "../../type/data"
import { LoginAction } from "../../type/store"
const initialState: Token = {
    token: '',
    refresh_token:''
}
function login(state = initialState, action: LoginAction): Token {
    switch (action.type) {
        case 'login/token':
            return action.payload
        case 'login/logout':
            return initialState
        default:
        return state
    }
}
export default login