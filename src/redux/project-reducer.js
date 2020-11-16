import projectsApi from './../api/projects-api';

let initialState = {
    projects: [],
    project: {}
};

const SET_PROJECTS = 'SET_PROJECTS';
const SET_PROJECT = 'SET_PROJECT';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return { ...state, projects: action.projects };
        }
        case SET_PROJECT: {
            return { ...state, project: action.project };
        }
    }

    return state;
};

const setCategories = (projects) => ({ type: SET_PROJECTS, projects });
const setProject = (project) => ({ type: SET_PROJECT, project });

export const getProjects = () => (dispatch) => {
    projectsApi.getProjects()
        .then(response => dispatch(setCategories(response)));
}

export const createProject = (project) => (dispatch) => {
    projectsApi.postProject(project)
        .then(r => dispatch(getProjects()));
}

export const getProject = (id) => (dispatch) => {
    projectsApi.getProject(id).then(r => dispatch(setProject(r)));
}

export const updateProject = (id, project) => (dispatch) => {
    projectsApi.updateProject(id, project).then(_ => dispatch(getProjects()));
}