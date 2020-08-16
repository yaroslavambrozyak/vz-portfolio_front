import {createStore, combineReducers} from "redux";
import portfolioReducer from "./portfolio-reducer";
import artReducer from "./art-reducer";

let reducers = combineReducers({
    portfolio: portfolioReducer,
    art: artReducer
});

let store = createStore(reducers);

export default store;