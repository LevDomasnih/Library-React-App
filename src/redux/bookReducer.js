import {booksAPI} from "../API/api";
import {reset} from "redux-form";

const GET_BOOKS = 'GET_BOOKS';

let initialState = {
    books: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: [...action.data].reverse(),
            };
        default:
            return state;
    }
}

export default bookReducer;

export const setBooksData = (data) => ({type: GET_BOOKS, data});

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
            if (data.resultCode === true) {
                dispatch(getBooks());
                dispatch(reset('newBook'))
            }

        })
}

export const editBook = (book) => (dispatch) => {
    booksAPI.editBook(book)
        .then((data) => {
            console.log(data)
            dispatch(getBooks());
        })
}

export const deleteBook = (id) => (dispatch) => {
    booksAPI.deleteBook(id)
        .then(data => {
            console.log(data)
            dispatch(getBooks());
        })
}