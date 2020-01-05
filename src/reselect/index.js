import { createSelector } from 'reselect'
import moment from 'moment';

const weatherItems = state => state.mainInfo.list;
const selectedDay = state => state.selectedDay;
const currentCityInfo = state => state.weatherForecast.mainInfo.city;
const favoriteCitiesList = state => state.favoriteCitiesList;
const selectedHour = state => state.selectedHour;

export const weatherHoursSelector = createSelector(
    weatherItems,
    selectedDay,
    (items, day) => items && items.filter(item => moment(item.dt_txt).format('dddd') === day)
);

export const uniqueDaysSelector = createSelector(
    weatherItems,
    (items) => {
        let uniqueDays = new Set();

        items && (
            items.forEach(item => {
                uniqueDays.add(moment(item.dt_txt).format('dddd'))
            })
        )

        return [...uniqueDays]
    }
);

export const formattedHoursSelector = createSelector(
    weatherItems,
    (items) => items && items.map(item => ({
        day: moment(item.dt_txt).format('dddd'),
        hour: moment(item.dt_txt).format('HH:mm')
    }))
);

export const cityFullNameSelector = createSelector(
    currentCityInfo,
    (city) => city && `${city.name}, ${city.country}`
);

export const isLikedSelector = createSelector(
    currentCityInfo,
    favoriteCitiesList,
    (city, favorites) => city && favorites.includes(`${city.name}, ${city.country}`)
);

export const selectedWeaterItemSelector = createSelector(
    weatherItems,
    selectedDay,
    selectedHour,
    (items, day, hour) => items && items.find(item =>
        moment(item.dt_txt).format('dddd') === day &&
        moment(item.dt_txt).format('HH:mm') === hour
    ),
);
