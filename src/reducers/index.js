import { combineReducers } from 'redux'
import weatherForecast from './weatherForecast';
import menuVisibility from './menuVisibility';
import favoriteCitiesList from './favoriteCitiesList';
import lastViewedCities from './lastViewedCities';
import darkMode from './darkMode';

export default combineReducers({
    weatherForecast,
    menuVisibility,
    favoriteCitiesList,
    lastViewedCities,
    darkMode
});