import axios from 'axios';
import { baseUrl } from '../config';

const http = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});

export default http;