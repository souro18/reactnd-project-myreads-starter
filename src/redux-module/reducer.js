import { SET_USER, SET_ERROR, SET_BOOK, INVALIDATE} from './contants';

const defaultState = {
    user: {},
    error: {},
    isLoggedIn: false,
    books: [],
}
const userReducer = (state= defaultState,action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, user: {...action.payload}, isLoggedIn: true}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_BOOK:
            return { ...state, books: action.payload}
        case INVALIDATE:
            return defaultState
        default:
            return state;
    }
}
export default userReducer;