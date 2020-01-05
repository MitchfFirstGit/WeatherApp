// modules
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import cx from 'classnames';
// Redux
import { setSelectedHour } from '../../actions/actions';
// reselect
import { weatherHoursSelector } from '../../reselect';
// utils
import { getWeatherIcon } from '../../utils/getWeatherIcon';
// styles
import styles from './styles.module.scss';

const Day = ({
    weatherHoursItems,
    setSelectedHour,
    selectedHour,
    city,
}) => {
    const handleClick = ({ currentTarget }) => {
        setSelectedHour(currentTarget.id)
    }

    const renderWeatherIcon = code => {
        const currentHour = new Date().getHours();
        const currentMinutes = new Date().getMinutes();
        const sunsetHour = new Date(city.sunset * 1000).getHours();
        const sunsetMinutes = new Date(city.sunset * 1000).getMinutes();
        const sunriseHour = new Date(city.sunrise * 1000).getHours();
        const sunriseMinutes = new Date(city.sunrise * 1000).getMinutes();
        let time = 'day';

        if (
            (currentHour > sunsetHour) ||
            (currentHour === sunsetHour && currentMinutes > sunsetMinutes) ||
            (currentHour < sunriseHour) ||
            (currentHour === sunriseHour && currentMinutes < sunriseMinutes)
        ) {
            time = 'night'
        }

        return <i className={`wi ${getWeatherIcon(code, time)}`} />
    }

    return (
        <>
            {weatherHoursItems && weatherHoursItems.length > 0 && <ul className={styles.hoursContainer}>
                {weatherHoursItems.map(item => (
                    <li className={cx(
                        styles.hourInfo,
                        {
                            [styles.activeHour]: selectedHour === moment(item.dt_txt).format('HH:mm')
                        })}
                        id={moment(item.dt_txt).format('HH:mm')}
                        onClick={handleClick}
                        key={moment(item.dt_txt).format('HH:mm')}
                    >
                        <div className={styles.hour}>
                            {moment(item.dt_txt).format('HH:mm')}
                        </div>

                        <div className={styles.weatherIcon}>
                            {renderWeatherIcon(item.weather[0].id)}
                        </div>

                        <div className={styles.temperature}>
                            {item.main.temp.toFixed(1)}
                        </div>
                    </li>))}
            </ul>
            }
        </>
    );
}

const mapStateToProps = ({ weatherForecast }) => ({
    weatherHoursItems: weatherHoursSelector(weatherForecast),
    selectedHour: weatherForecast.selectedHour,
    city: weatherForecast.mainInfo.city,
});

const mapDispatchToProps = {
    setSelectedHour
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);
