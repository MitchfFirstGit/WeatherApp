// modules
import React from 'react';
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
                        <div className={styles.sunriseIcon}>
                            <i className="wi wi-sunrise" />
                        </div>

                        {`${moment(new Date(mainInfo.city.sunrise * 1000)).format('HH:mm')} h`}
                    </div>

                    <div className={styles.wind}>
                        <div className={styles.sunriseIcon}>
                            <i className="wi wi-strong-wind" />
                        </div>

                        {selectedWeaterItem.wind.speed.toFixed(1)} m/s
                </div>

                    <div className={styles.humidity}>
                        <div className={styles.sunriseIcon}>
                            <i className="wi wi-humidity" />
                        </div>

                        {selectedWeaterItem.main.humidity}%
                </div>

                    <div className={styles.sunset}>
                        <div className={styles.sunriseIcon}>
                            <i className="wi wi-sunset" />
                        </div>

                        {`${moment(new Date(mainInfo.city.sunset * 1000)).format('HH:mm')} h`}
                    </div>
                </div>
            </div>}
        </>
    );
}

const mapStateToProps = ({ weatherForecast: { selectedDay, selectedHour, mainInfo } }) => ({
    selectedWeaterItem: mainInfo.list && mainInfo.list.find(item => moment(item.dt_txt).format('dddd') === selectedDay && moment(item.dt_txt).format('HH:mm') === selectedHour),
    mainInfo
});

export default connect(
    mapStateToProps
)(MainInfo);

