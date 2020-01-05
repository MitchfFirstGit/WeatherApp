import { createSelector } from 'reselect'
import moment from 'moment';

const weatherItems = state => state.mainInfo.list;
const selectedDay = state => state.selectedDay;

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
