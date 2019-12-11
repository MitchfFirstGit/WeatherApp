import {
    GET_WEATHER_FORECAST,
    CLEAR_WEATHER_FORECAST,
    ERROR_WEATHER_FORECAST,
    SET_SELECTED_DAY
} from "../actions/constants";

export const initialState = {
    weatherItems: [],
    loading: false,
    error: {},
    selectedDay: ''
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_WEATHER_FORECAST:
            return {
                ...state,
                weatherItems: payload.weatherItems,
                selectedDay: payload.selectedDay,
                loading: false,
            };

        case CLEAR_WEATHER_FORECAST:
            return {
                ...state,
                weatherItems: [],
                loading: true,
                error: {}
            }

        case ERROR_WEATHER_FORECAST:
            return {
                ...state,
                error: { message: payload.errorMessage },
                loading: false
            };

        case SET_SELECTED_DAY:
            return {
                ...state,
                selectedDay: payload.selectedDay
            };

        default:
            return state
    }
};
