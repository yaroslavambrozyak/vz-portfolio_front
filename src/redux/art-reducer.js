import { artsApi } from './../api/art-api'
import { finishPreloadLogoAC } from './welcome-reducer';


let initialState = {
    art: {
        id: '',
        name: '',
        description: '',
        images: [],
        prev: {},
        next: {}
    }
};

const SET_ART = 'SET_ART';

const artReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ART: {
            return { ...state, art: action.artData }
        }
    }
    return state;
};

const setArtData = (artData) => ({ type: SET_ART, artData });

export const getArt = (artId) => (dispatch) => {
    artsApi.getArt(artId)
        .then(resp => {
            dispatch(setArtData(resp));
            dispatch(finishPreloadLogoAC());
        });
};

export default artReducer;