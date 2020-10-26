import { artsApi } from './../api/art-api';


let initialState = {
    choosedCategory: {},
    sortedArts: [],
}

const SET_ARTS = 'SET_ARTS';
const SET_CHOOSED_CATEGORY = 'SET_CHOOSED_CATEGORY';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTS: {
            return { ...state, arts: action.arts }
        }
        case SET_CHOOSED_CATEGORY: {
            return { ...state, category: action.category };
        }
    }

    return state;
}

export const setCategory = (category) => ({ type: SET_CHOOSED_CATEGORY, category })
export const setSortedArts = (arts) => ({ type: SET_ARTS, arts });

export const getArtsByCategoryName = (categoryName) => (dispatch) => {
    artsApi.getArtsByCategoryAndType('categories', categoryName)
        .then(resp => dispatch(setSortedArts(resp)));
}