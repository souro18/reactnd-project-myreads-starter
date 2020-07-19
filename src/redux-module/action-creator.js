import { SET_USER, SET_ERROR, SET_BOOK, INVALIDATE} from './contants';

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

export { setUser, setError,setBook ,invalidate};