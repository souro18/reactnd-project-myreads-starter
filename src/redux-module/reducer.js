import { SET_USER, SET_ERROR, SET_BOOK, SET_SEARCHED, UPDATE_BOOK, UPDATE_SEARCHED_BOOK, INVALIDATE } from './contants';

const defaultState = {
    user: {},
    error: {},
    isLoggedIn: localStorage.token.length > 10 ? true: false,
    books: [],
    read: [],
    wantToRead: [],
    currentlyReading: [],
    searchedBooks: []
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
        case SET_SEARCHED:
            const searchedBooks = action.payload.map(book => {
                const isExisting = state.books.find(b => (b.title === book.title && book.authors[0] === b.authors[0]));
                isExisting? book.state = isExisting.state : book.state = "none";
                return book;
            })
            return {...state, searchedBooks };
        case UPDATE_SEARCHED_BOOK:
            const updatedBooks = state.searchedBooks.map(book => {
                if(book.title === action.payload.title && book.authors[0] === action.payload.authors[0]) {
                    book.state = action.payload.state;
                }
                return book;
            })
            if(action.isNew) {
                return {...state, searchedBooks: updatedBooks, books: [...state.books, { ...action.payload}]}
            }
            return {...state, searchedBooks: updatedBooks}
        case INVALIDATE:
            return defaultState;
        default:
            return state;
    }
}
export default userReducer;