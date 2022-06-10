import { User, UserProfile } from "../../type/data"
import { ProfileAction } from "../../type/store"

type ProfileState = {
    user: User,
    userProfile:UserProfile
}
const initialState = {
    user: {},
    userProfile:{}
} as ProfileState
const profile = (state = initialState, action: ProfileAction) => {
    switch (action.type) {
        case 'profile/getuser':
            return {
                ...state,
                user:action.payload
            }
        case 'profile/getUserProfile': 
            return {
                ...state,
                userProfile:action.payload
            }
        case 'profile/photo':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photo: action.payload,
        },
      };
    case 'profile/update':
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          ...action.payload,
        },
      };
        default:
            return state
    }
}
export default profile