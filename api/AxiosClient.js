
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        console.error('Axios error:', error);
        return Promise.reject(error);
    }
);

export default axiosClient;
