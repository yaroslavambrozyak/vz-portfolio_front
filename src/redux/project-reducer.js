import projectsApi from './../api/projects-api';

let initialState = {
    projects: []
};

const SET_PROJECTS = 'SET_PROJECTS';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return { ...state, projects: action.projects };
        }
    }

    return state;
};

const setCategories = (categories) => ({ type: SET_PROJECTS, categories });

export const getProjects = () => (dispatch) => {
    projectsApi.getProjects()
        .then(response => dispatch(setCategories(response)));
}