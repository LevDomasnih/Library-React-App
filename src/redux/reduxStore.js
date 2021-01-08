import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers } from "redux";
import bookReducer from "./bookReducer";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    booksStore: bookReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;