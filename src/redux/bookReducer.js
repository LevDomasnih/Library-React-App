import {booksAPI} from "../API/api";

const GET_BOOKS = 'GET_BOOKS';
const UPDATE_BOOKS = 'UPDATE_BOOKS';

let initialState = {
    books: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: [...state.books, ...action.data],
            };
        case UPDATE_BOOKS:
            return {
                ...state,
                books: state.books.filter(el => el.id !== action.id),
            };
        default:
            return state;
    }
}

export default bookReducer;

export const setBooksData = (data) => ({ type: GET_BOOKS, data});

export const updateBooks = (id) => ({ type: UPDATE_BOOKS, id});


export const getBooks = () => (dispatch) => {
    booksAPI.getBooks()
        .then(data => {
            console.log(data)
            dispatch(setBooksData(data));
        })
}

export const addBook = (book) => (dispatch) => {
    booksAPI.addBook(book)
        .then(data => {
            console.log(data)
            dispatch(setBooksData([data])); // not fine!
        })
}

export const deleteBook = (id) => (dispatch) => {
    booksAPI.deleteBook(id)
        .then(data => {
            console.log(data)
            dispatch(updateBooks(id)); // not fine!
        })
}