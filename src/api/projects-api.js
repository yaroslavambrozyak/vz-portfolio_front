import axios from './axios-conf';

export default {
    getProjects() {
        return axios.get('/projects')
            .then(response => response.data);
    }
}