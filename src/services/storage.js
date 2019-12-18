// class to handle storage actions
class StorageService {
    constructor(storageType = 'sessionStorage') {
        this.storage = window[storageType];
    }

    // get item from storage
    getItem(key) {
        try {
            const serializedState = localStorage.getItem(key);

            if (serializedState === null) {
                return [];
            }

            return JSON.parse(serializedState);
        } catch (err) {
            return [];
        }
    }

    // set item from storage
    setItem(key, value) {
        try {
            const serializedState = JSON.stringify(value);
            this.storage.setItem(key, serializedState);
        } catch {
            // ignore for now
        }
    }

    // remove item from storage
    removeItem(key) {
        this.storage.removeItem(key);
    }
}

export const LocalStorageService = new StorageService('localStorage');
export default new StorageService();
