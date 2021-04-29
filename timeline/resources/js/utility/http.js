import axios from 'axios';

const http = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000'
});

export default http;