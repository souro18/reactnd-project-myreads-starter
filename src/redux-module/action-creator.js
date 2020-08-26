import { SET_USER, SET_ERROR, SET_BOOK, SET_SEARCHED, UPDATE_BOOK, UPDATE_SEARCHED_BOOK, INVALIDATE} from './contants';

const setUser = user => {
    return {
        type: SET_USER,
        payload: user
    }
}

const setError = error => {
    return {
        type: SET_ERROR,
        payload: error
    }
}

const setBook = books => {
    return {
        type: SET_BOOK,
        payload: books
    }
}

const invalidate = () => {
    return {
        type: SET_ERROR,
    }
}

const setSearchBook = books => {
    return {
        type: SET_SEARCHED,
        payload: books
    }
}

const updateSearchBook = (book, isNew) => {
    return {
        type: UPDATE_SEARCHED_BOOK,
        payload: book,
        isNew
    }
}

const updateBook = book => {
    return {
        type: UPDATE_BOOK,
        payload: book
    }
}

export { setUser, setError,setBook , setSearchBook, updateSearchBook, updateBook, invalidate};