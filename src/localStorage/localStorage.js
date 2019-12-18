export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favoriteCitiesList', serializedState);
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favoriteCitiesList');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return [];
    }
};