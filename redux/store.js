import {configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import reducerArtricle from "./reducers/reducerArticle";
import reducerCart from "./reducers/reducerCart";
const rootReducer = combineReducers({
    Articles : reducerArtricle,
    Cart : reducerCart
})
const store = configureStore({
    reducer : rootReducer,
    devTools:true
})
export default store