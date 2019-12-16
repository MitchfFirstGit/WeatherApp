import { combineReducers } from 'redux'
import weatherForecast from './weatherForecast';
import menuVisibility from './menuVisibility';

export default combineReducers({
    weatherForecast,
    menuVisibility
});