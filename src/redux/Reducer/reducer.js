import initialState from "./initialState";
import {
    CLEAR_DATA,
    LOGIN_SUCCESS,
    LOADER,
    SET_FCM_TOKEN_SUCCESS,
} from '../Action/types';
export default  (state = initialState, action) => {

    console.log('Actions : ', action)
    if (action.payload && (action.payload.type === LOADER)) {
        console.log("Reducer-->", action)
        return {
            ...state,
            case: action.payload.type,
            loading: action.payload.loading
        }
    }

    switch (action.type) {
        case LOADER:
            return {
                ...state,
                case: action.type,
                loading: action.loading
            }
        case CLEAR_DATA:
            return {
                ...state,
                case: '',
                message: '',
            }
        case SET_FCM_TOKEN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: '',
                fcmToken: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                case: action.type,
                message: action.message,
                userData: action.payload,
            }
        
        default:
            return {
                ...state,
                case: action.type,
                message: action.message,
            }
    }
}