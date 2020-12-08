import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ziguen-api.herokuapp.com/',
})

export default api;