import {
    ADD_TO_FAVORITE_CITIES_LIST
} from "../actions/constants";
import { loadState } from '../localStorage/localStorage';

const persistedState = loadState();

export default (state = persistedState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_FAVORITE_CITIES_LIST:
            return [...state, payload.city]
        default:
            return state
    }
};
