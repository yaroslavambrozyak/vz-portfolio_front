import { artsApi } from './../api/art-api';
import categoryApi from './../api/category-api';

let initialState = {
    choosedCategory: {},
    sortedArts: [],
    categories: []
}

const SET_ARTS = 'SET_ARTS';
const SET_CHOOSED_CATEGORY = 'SET_CHOOSED_CATEGORY';
const SET_CATEGORIES = 'SET_CATEGORIES';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTS: {
            return { ...state, sortedArts: action.arts }
        }
        case SET_CHOOSED_CATEGORY: {
            return { ...state, choosedCategory: action.category };
        }
    }

    return state;
}

export const setCategory = (category) => ({ type: SET_CHOOSED_CATEGORY, category })
export const setSortedArts = (arts) => ({ type: SET_ARTS, arts });
const setCategories = (categories) => ({ type: SET_CATEGORIES, categories })

export const getArtsByCategoryName = (categoryName) => (dispatch) => {
    artsApi.getArtsByCategoryAndType('categories', categoryName)
        .then(resp => dispatch(setSortedArts(resp)));
}

export const changeCategory = (category) => (dispatch) => {
    dispatch(setCategory(category));
    dispatch(getArtsByCategoryName(category.name));
}

export const getCategories = () => (dispatch) => {
    categoryApi.getCategories()
        .then(res => {
            if (res.length > 0) {
                dispatch(setCategories(res));
                dispatch(changeCategory(res[0]));
            }
        })
}