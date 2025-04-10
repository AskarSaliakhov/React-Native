
import { makeAutoObservable } from 'mobx';
import axiosClient from "../../api/AxiosClient";

class AccountStore {
    accounts = [];
    loading = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchAccounts() {
        this.loading = true;
        this.error = null;

        try {
            const response = await axiosClient.get('/users');
            this.accounts = response.data;
        } catch (error) {
            this.error = 'Failed to fetch accounts';
        } finally {
            this.loading = false;
        }
    }
}

const accountStore = new AccountStore();
export default accountStore;
