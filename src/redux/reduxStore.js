import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers } from"redux";
import bookReducer from "./bookReducer";


let reducers = combineReducers({
    book: bookReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;