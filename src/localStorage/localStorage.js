export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favoriteCities', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favoriteCities');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};