import ItemRepository from '../repository/ItemRepository';

export default class ItemService {
    constructor() {
        this.itemRepository = new ItemRepository('items');
    }

    getItems = async () => {
        const response = await this.itemRepository.getItems();
        return response.data.slice(0, 10);
    };

    getLocalItems = async () => {
        return await this.itemRepository.getLocalItems();
    };

    saveItemsLocally = async (data) => {
        return await this.itemRepository.setLocalItems(data);
    };

    deleteLocalItem = async (key) => {
        return await this.itemRepository.removeLocalItem(key);
    };
}
