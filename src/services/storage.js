// class to handle storage actions
class StorageService {
    constructor(storageType = 'sessionStorage') {
        this.storage = window[storageType];
    }

    // get item from storage
    getItem(key, parse) {
        const value = this.storage.getItem(key);

        if (parse) return JSON.parse(value);

        return value;
    }

    // set item from storage
    setItem(key, value, stringify) {
        stringify ? this.storage.setItem(key, JSON.stringify(value)) : this.storage.setItem(key, value);
    }

    // remove item from storage
    removeItem(key) {
        this.storage.removeItem(key);
    }
}

export const LocalStorageService = new StorageService('localStorage');
export default new StorageService();
