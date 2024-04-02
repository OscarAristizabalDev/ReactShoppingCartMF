import axios from 'axios';

const apiClient = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3030',
        responseType: 'json'
    });

    return axiosInstance;
}

export default apiClient;