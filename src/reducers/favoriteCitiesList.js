import {
    ADD_TO_FAVORITE_CITIES_LIST,
    REMOVE_FROM_FAVORITE_CITIES_LIST,
} from "../actions/constants";
import { LocalStorageService } from '../services/storage';

const localStorageFavoriteCities = LocalStorageService.getItem('favoriteCitiesList');

export default (state = localStorageFavoriteCities, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_TO_FAVORITE_CITIES_LIST:
            return payload.favoriteCities
            
        case REMOVE_FROM_FAVORITE_CITIES_LIST:
            return payload.filteredCities;

        default:
            return state
    }
};
