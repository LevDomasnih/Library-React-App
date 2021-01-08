import {booksAPI} from "../API/api";

const GET_BOOKS = 'GET_BOOKS';
const UPDATE_BOOKS = 'UPDATE_BOOKS';
const EDIT_BOOKS = 'EDIT_BOOKS';

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
        case EDIT_BOOKS:
            return {
                ...state,
                books: [...state.books.filter(el => el.id !== action.data.id), ...state.books.filter(el => el.id === action.data.id).map(el => {
                    return {
                        id: action.data.id,
                        genre: action.data.genre,
                        author: action.data.author,
                        naming: action.data.naming,
                        years: action.data.years,
                    }
                })
                ].sort((a,b) => a.id - b.id)
            }
        default:
            return state;
    }
}

export default bookReducer;

export const setBooksData = (data) => ({type: GET_BOOKS, data});
export const updateBooksData = (id) => ({type: UPDATE_BOOKS, id});
export const editBooksData = (data) => ({type: EDIT_BOOKS, data});

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
                dispatch(setBooksData([data.dataBook]));
            }

        })
}

export const editBook = (book) => (dispatch) => {
    booksAPI.editBook(book)
        .then((data) => {
            console.log(data)
            dispatch(editBooksData(book));
        })
}

export const deleteBook = (id) => (dispatch) => {
    booksAPI.deleteBook(id)
        .then(data => {
            console.log(data)
            dispatch(updateBooksData(id));
        })
}