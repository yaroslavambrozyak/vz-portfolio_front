import categoryApi from './../api/category-api';

let initialState = {
    categories: []
}

const SET_CATEGORIES = 'SET_CATEGORIES';

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES: {
            return { ...state, categories: action.categories };
        }
    }
    return state;
}

export default categoryReducer;

const setCategories = (categories) => ( { type: SET_CATEGORIES, categories } );

export const getCategoriesThuncCreator = () => (dispatch) => {
    categoryApi.getCategories()
        .then(response => {
            dispatch(setCategories(response));
        });
}