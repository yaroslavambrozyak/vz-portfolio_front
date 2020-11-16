import axios from './axios-conf';

export default {
    getProjects() {
        return axios.get('/projects')
            .then(response => response.data);
    },

    getProject(id) {
        return axios.get(`/projects/${id}`)
            .then(r => r.data);
    },

    postProject(project) {
        return axios.post('/projects', project)
            .then(r => r.data);
    },

    updateProject(id, project) {
        return axios.put(`/projects/${id}`, project)
            .then(r => r.data);
    }
}