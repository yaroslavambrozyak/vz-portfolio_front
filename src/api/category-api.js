import { postCategory } from '../redux/category-reducer';
import axios from './axios-conf';

export default {
    getCategories() {
        return axios.get('/categories')
            .then(response => {
                return response.data;
            });
    },

    postCategory(category) {
        return axios.post('/categories', category)
            .then(response => {
                return response.data;
            })
    },

    getCategory(categoryId) {
        return axios.get(`/categories/${categoryId}`)
            .then(resp => resp.data);
    },

    updateCategory(id, category) {
        return axios.put(`/categories/${id}`, category)
            .then(r => r);
    }
};