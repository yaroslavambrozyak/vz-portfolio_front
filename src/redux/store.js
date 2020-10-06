import { createStore, combineReducers, applyMiddleware } from "redux";
import portfolioReducer from "./portfolio-reducer";
import artReducer from "./art-reducer";
import welcomeReducer from './welcome-reducer';
import navbarReducer from './navbar-reducer';
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import categoryReducer from './category-reducer';

let reducers = combineReducers({
    portfolio: portfolioReducer,
    art: artReducer,
    welcomePage: welcomeReducer,
    navbar: navbarReducer,
    category: categoryReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;