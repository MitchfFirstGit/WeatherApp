// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherPartlyCloudy } from '@mdi/js';
import { connect } from 'react-redux';
import moment from 'moment';
// Redux
import { setSelectedHour } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Day = ({
    weatherHoursItems,
    setSelectedHour
}) => {
    console.log(weatherHoursItems)
    const handleClick = ({ currentTarget }) => {
        setSelectedHour(currentTarget.id)
    }
    return (
        <ul className={styles.daysContainer}>
            {weatherHoursItems && weatherHoursItems.map(item => (
                <li className={styles.dayInfo} id={moment(item.dt_txt).format('h a')} onClick={handleClick}>
                    <div className={styles.hour}>
                        {moment(item.dt_txt).format('h a')}
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy} size={2.5} color="white" className={styles.weatherIcon} />
                    <div className={styles.temperature}>
                        {item.main.temp.toFixed(1)}
                    </div>
                </li>))}
        </ul>
    );
}


const mapStateToProps = ({ weatherForecast: { weatherItems, selectedDay } }) => ({
    weatherHoursItems: weatherItems.filter(item => moment(item.dt_txt).format('dddd') === selectedDay),
});

const mapDispatchToProps = {
    setSelectedHour
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);

// weatherHoursItems