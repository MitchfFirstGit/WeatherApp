import { createSelector } from 'reselect'
import moment from 'moment';

const weatherItems = state => state.mainInfo.list;
const selectedDay = state => state.selectedDay;

export const weatherHoursSelector = createSelector(
    weatherItems,
    selectedDay,
    (items, day) => items && items.filter(item => moment(item.dt_txt).format('dddd') === day)
)