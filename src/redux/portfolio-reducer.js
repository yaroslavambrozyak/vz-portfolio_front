import { finishPreloadLogoAC } from './welcome-reducer';
import { artsApi } from './../api/art-api'

const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
const SET_PORTFOLIO_ARTS = 'SET_PORTFOLIO_ARTS';

let initialState = {
    arts: [],
    isFetching: false
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IN_PROGRESS: {
            return { ...state, isFetching: action.isFetching }
        }
        case SET_PORTFOLIO_ARTS: {
            return { ...state, arts: action.arts }
        }
    }
    return state;
};

export default portfolioReducer;

export const setPortfolioArtsAC = (arts) => ({ type: SET_PORTFOLIO_ARTS, arts });
export const toggleFetchingAC = (isFetching) => ({ type: FETCH_IN_PROGRESS, isFetching });

export const getPortfolioArtsThunkCreator = (category) => (dispatch) => {
    dispatch(toggleFetchingAC(true));
    let c = category !== undefined ? category : 'portfolio';
    artsApi.getArtsByCategory(c)
        .then(response => {
            dispatch(setPortfolioArtsAC(response.data));
            dispatch(finishPreloadLogoAC());
        });
}