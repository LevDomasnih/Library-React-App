import {booksAPI} from "../API/api";

const GET_BOOKS = 'GET_BOOKS'

let initialState = {
    books: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            debugger
            return {
                ...state,
                books: action.data,
            };

        default:
            return state;
    }
}

export default bookReducer;

export const setBooksData = (data) => ({ type: GET_BOOKS, data});

export const getBooks = () => (dispatch) => {
    booksAPI.getBooks()
        .then(data => {
            console.log(data)
            dispatch(setBooksData(data));
        })
}