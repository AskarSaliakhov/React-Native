import AxiosClient from '../api/AxiosClient';
import LocalClient from '../utils/LocalClient';

export default class ItemRepository {
    constructor(tableName) {
        this.apiClient = new AxiosClient();
        this.localClient = new LocalClient();
        this.tableName = tableName;
    }

    getItems = () => {
        return this.apiClient.get('/posts');
    };

    getLocalItems = () => {
        return this.localClient.get(this.tableName);
    };

    setLocalItems = (data) => {
        return this.localClient.set(this.tableName, data);
    };

    removeLocalItem = (key) => {
        return this.localClient.removeItem(key);
    };
}
