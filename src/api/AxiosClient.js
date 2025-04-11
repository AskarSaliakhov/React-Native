import axios from 'axios';
import { Platform } from 'react-native';

export default class AxiosClient {

    constructor(config) {
        this.api = axios.create(config || {});
        this.api.defaults.baseURL = this.getDefaultBaseUrl();
        this.api.defaults.headers.common['App-Platform'] = Platform.OS;
        this.api.defaults.headers.common['Content-Type'] = 'application/json';
    }

    getDefaultBaseUrl() {
        return 'https://jsonplaceholder.typicode.com';
    }

    get(url, config) {
        return this.api.get(url, config);
    }

    post(url, data, config) {
        return this.api.post(url, data, config);
    }

    put(url, data, config) {
        return this.api.put(url, data, config);
    }

    delete(url, config) {
        return this.api.delete(url, config);
    }
}
