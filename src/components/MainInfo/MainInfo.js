// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherWindy, mdiWaterOutline, mdiWeatherSunsetUp, mdiWeatherSunsetDown } from '@mdi/js';
import { connect } from 'react-redux';
import moment from 'moment';
// styles
import styles from './styles.module.scss';

const MainInfo = ({
    selectedWeaterItem,
    mainInfo
}) => {
    return (
        <>
            {selectedWeaterItem && <div className={styles.infoContainer}>
                <div className={styles.city}>
                    {`${mainInfo.city.name}, ${mainInfo.city.country}`}
                </div>

                <div className={styles.date}>
                    {moment(selectedWeaterItem.dt_txt).format('ddd, D MMMM')}
                </div>

                <div className={styles.temperature}>
                    {selectedWeaterItem && selectedWeaterItem.main.temp.toFixed(1)}
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.sunrise}>
                        <Icon path={mdiWeatherSunsetUp} size={1.2} color="white" />
                        {`${moment(new Date(mainInfo.city.sunrise * 1000)).format('HH:mm')} h`}
                    </div>

                    <div className={styles.wind}>
                        <Icon path={mdiWeatherWindy} size={1.2} color="white" />
                        {selectedWeaterItem.wind.speed.toFixed(1)} m/s
                </div>

                    <div className={styles.humidity}>
                        <Icon path={mdiWaterOutline} size={1.2} color="white" />
                        {selectedWeaterItem.main.humidity}%
                </div>

                <div className={styles.sunset}>
                        <Icon path={mdiWeatherSunsetDown} size={1.2} color="white" />
                        {`${moment(new Date(mainInfo.city.sunset * 1000)).format('HH:mm')} h`}
                    </div>
                </div>
            </div>}
        </>
    );
}

const mapStateToProps = ({ weatherForecast: { weatherItems, selectedDay, selectedHour, mainInfo } }) => ({
    selectedWeaterItem: weatherItems.find(item => moment(item.dt_txt).format('dddd') === selectedDay && moment(item.dt_txt).format('h a') === selectedHour),
    mainInfo
});

export default connect(
    mapStateToProps
)(MainInfo);

