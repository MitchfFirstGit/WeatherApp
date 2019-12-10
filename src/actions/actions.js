import {
    CLEAR_WEATHER_FORECAST,
    GET_WEATHER_FORECAST,
    ERROR_WEATHER_FORECAST,
} from './constants';

const apiKey = 'de1e94c85ef8c5b5b4456417ebd24daf';
const url = `http://api.openweathermap.org/data/2.5/forecast?q=london&APPID=${apiKey}`

export const getWeatherForecast = () => async dispatch => {
    dispatch({ type: CLEAR_WEATHER_FORECAST });

    try {
        const res = await fetch(url);
        const data = await res.json();

        dispatch({
            type: GET_WEATHER_FORECAST,
            payload: {
                weatherItems: data.list
            }
        });
    } catch (err) {
        // dispatch({
        //     type: WEATHER_ITEMS_ERROR,
        //     payload: { msg: err.response.statusText, status: err.response.status }
        // });
    }
};