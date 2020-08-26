import { SET_USER, SET_ERROR, SET_BOOK, INVALIDATE } from './contants';

const defaultState = {
    user: {},
    error: {},
    isLoggedIn: localStorage.token.length > 10 ? true: false,
    books: [],
    read: [],
    wantToRead: [],
    currentlyReading: [],
}
const userReducer = (state= defaultState,action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, user: {...action.payload}, isLoggedIn: true}
        case SET_ERROR:
            return {...state, error: action.payload}
        case SET_BOOK:
            const books = action.payload.data.books;
            const currentlyReading = books.filter(book => book.state === "currentlyReading");
            const wantToRead = books.filter(book => book.state === "wantToRead");
            const read = books.filter(book => book.state === "read");
            return { ...state, books, currentlyReading, wantToRead, read}
        case INVALIDATE:
            return defaultState;
        default:
            return state;
    }
}
export default userReducer;