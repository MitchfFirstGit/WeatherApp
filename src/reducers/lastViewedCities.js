import {
    ADD_TO_LAST_VIEWED_CITIES,
    REMOVE_FROM_LAST_VIEWED_CITIES,
} from "../actions/constants";

import { LocalStorageService } from '../services/storage';

const localStorageLastViewedCities = LocalStorageService.getItem('lastViewedCities');

export default (state = localStorageLastViewedCities, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_LAST_VIEWED_CITIES:
            return payload.uniqueCities
            
        case REMOVE_FROM_LAST_VIEWED_CITIES:
            return payload.filteredCities;

        default:
            return state
    }
};
