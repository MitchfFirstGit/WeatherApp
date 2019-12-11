import moment from 'moment';

import {
    CLEAR_WEATHER_FORECAST,
    GET_WEATHER_FORECAST,
    ERROR_WEATHER_FORECAST,
    SET_SELECTED_DAY,
    SET_SELECTED_HOUR,
} from './constants';

const apiKey = 'de1e94c85ef8c5b5b4456417ebd24daf';

export const getWeatherForecast = (city = 'kyiv') => async dispatch => {
    dispatch({ type: CLEAR_WEATHER_FORECAST });

    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('Invalid request');
        }

        const data = await res.json();

        dispatch({
            type: GET_WEATHER_FORECAST,
            payload: {
                weatherItems: data.list,
                selectedDay: moment(data.list[0].dt_txt).format('dddd'),
                selectedHour: moment(data.list[0].dt_txt).format('h a')
            }
        });
    } catch (err) {
        dispatch({
            type: ERROR_WEATHER_FORECAST,
            payload: {
                errorMessage: err.message,
            }
        });
    }
};

export const setSelectedDay = (selectedDay, selectedHour) => dispatch => {
    dispatch({
        type: SET_SELECTED_DAY,
        payload: {
            selectedDay,
            selectedHour
        }
    });
};

export const setSelectedHour = (selectedHour) => dispatch => {
    dispatch({
        type: SET_SELECTED_HOUR,
        payload: {
            selectedHour
        }
    });
}
