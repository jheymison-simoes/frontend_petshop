import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backedprojectpet.herokuapp.com',
});

export default api;