import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import {productsReducer} from "./productsReducer.js";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    products: productsReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))