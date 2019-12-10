import { GET_WEATHER_FORECAST, CLEAR_WEATHER_FORECAST, WEATHER_ITEMS_FORECAST } from "../actions/constants";

export const initialState = {
    weatherItems: [],
    loading: false,
    error: {},
};

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_WEATHER_FORECAST:
            return {
                ...state,
                weatherItems: payload.weatherItems
            };

        // case CLEAR_WEATHER_ITEMS:
        //     return {
        //         ...state,
        //         profile: null,
        //         loading: false
        //     }

        // case WEATHER_ITEMS_ERROR:
        //     return {
        //         ...state,
        //         error: payload,
        //         loading: false
        //     };

        default:
            return state
    }
};
