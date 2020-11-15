import { artsApi } from './../api/art-api'
import { finishPreloadLogoAC } from './welcome-reducer';


let initialState = {
    art: {
        id: '',
        name: '',
        description: '',
        images: [],
    },
    prev: {},
    next: {}
};

const SET_ART = 'SET_ART';
const SET_PREV_ART = 'SET_PREV_ART';
const SET_NEXT_ART = 'SET_NEXT_ART';

const artReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ART: {
            return { ...state, art: action.artData }
        }
        case SET_PREV_ART: {
            return { ...state, prev: action.prevArtData }
        }
        case SET_NEXT_ART: {
            return { ...state, next: action.nextArtData }
        }
    }
    return state;
};

const setArtData = (artData) => ({ type: SET_ART, artData });
const setPrevArtData = (prevArtData) => ({ type: SET_PREV_ART, prevArtData });
const setNextArtData = (nextArtData) => ({ type: SET_NEXT_ART, nextArtData });


export const getArt = (artId) => (dispatch) => {
    artsApi.getArt(artId)
        .then(resp => {
            dispatch(setArtData(resp));
            dispatch(finishPreloadLogoAC());
        });
};

export const getPrevArt = (artId) => (dispatch) => {
    artsApi.getPrevArt(artId)
        .then(resp => {
            dispatch(setPrevArtData(resp))
        });
}

export const getNextArt = (artId) => (dispatch) => {
    artsApi.getNextArt(artId)
        .then(resp=>{
            dispatch(setNextArtData(resp));
        })
}

export default artReducer;