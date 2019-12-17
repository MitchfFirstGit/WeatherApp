// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherPartlyCloudy } from '@mdi/js';
import { connect } from 'react-redux';
import moment from 'moment';
import cx from 'classnames';
// Redux
import { setSelectedHour } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Day = ({
    weatherHoursItems,
    setSelectedHour,
    selectedHour
}) => {
    const handleClick = ({ currentTarget }) => {
        setSelectedHour(currentTarget.id)
    }
    
    return (
        <ul className={styles.hoursContainer}>
            {weatherHoursItems && weatherHoursItems.map(item => (
                <li className=
                    {cx(styles.hourInfo, { [styles.activeHour]: selectedHour === moment(item.dt_txt).format('h a') })}
                    id={moment(item.dt_txt).format('h a')}
                    onClick={handleClick}
                    key={moment(item.dt_txt).format('h a')}
                >
                    <div className={styles.hour}>
                        {moment(item.dt_txt).format('HH:mm')}
                    </div>

                    <Icon path={mdiWeatherPartlyCloudy} size={2.5} color="white" className={styles.weatherIcon} />

                    <div className={styles.temperature}>
                        {item.main.temp.toFixed(1)}
                    </div>
                </li>))}
        </ul>
    );
}


const mapStateToProps = ({ weatherForecast: { weatherItems, selectedDay, selectedHour } }) => ({
    weatherHoursItems: weatherItems.filter(item => moment(item.dt_txt).format('dddd') === selectedDay),
    selectedHour
});

const mapDispatchToProps = {
    setSelectedHour
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Day);
