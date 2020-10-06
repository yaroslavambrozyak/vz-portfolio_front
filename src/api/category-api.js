import axios from './axios-conf';

export default {
    getCategories() {
        return axios.get('/categories')
            .then(response => {
                return response.data;
            });
    }
};