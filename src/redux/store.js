import {createStore, combineReducers} from "redux";
import portfolioReducer from "./portfolio-reducer";

let reducers = combineReducers({
    portfolio: portfolioReducer
});

let store = createStore(reducers);

export default store;