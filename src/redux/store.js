import {createStore, combineReducers} from "redux";
import portfolioReducer from "./portfolio-reducer";
import artReducer from "./art-reducer";
import welcomeReducer from './welcome-reducer';
import navbarReducer from './navbar-reducer';

let reducers = combineReducers({
    portfolio: portfolioReducer,
    art: artReducer,
    welcomePage: welcomeReducer,
    navbar: navbarReducer
});

let store = createStore(reducers);

export default store;