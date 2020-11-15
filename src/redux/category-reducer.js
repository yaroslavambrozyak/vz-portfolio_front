import categoryApi from './../api/category-api';

let initialState = {
    categories: [],
    category: {}
}

const SET_CATEGORIES = 'SET_CATEGORIES';
const SET_CATEGORY = 'SET_CATEGORY';
const CLEAN_CATEGORY = 'CLEAN_CATEGORY';

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return { ...state, categories: action.categories };
        }
        case SET_CATEGORY: {
            return { ...state, category: action.category };
        }
        case CLEAN_CATEGORY: {
            return { ...state, category: {} };
        }
    }
    return state;
}

export default categoryReducer;

const setCategories = (categories) => ({ type: SET_CATEGORIES, categories });
const setCategory = (category) => ({ type: SET_CATEGORY, category });
const cleanCategory = () => ({ type: CLEAN_CATEGORY });

export const getCategoriesThuncCreator = () => (dispatch) => {
    categoryApi.getCategories()
        .then(response => {
            dispatch(setCategories(response));
        });
}

export const postCategory = (category) => (dispatch) => {
    categoryApi.postCategory(category)
        .then(_ => dispatch(getCategoriesThuncCreator()));
}

export const getCategory = (categoryId) => (dispatch) => {
    categoryApi.getCategory(categoryId)
        .then(resp => dispatch(setCategory(resp)));
}

export const updateCategory = (id, category) => (dispatch) => {
    categoryApi.updateCategory(id, category)
        .then(_ => {
            dispatch(cleanCategory);
            dispatch(getCategoriesThuncCreator());
        });
}