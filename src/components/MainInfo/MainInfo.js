// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherWindy, mdiWaterOutline  } from '@mdi/js';
import { connect } from 'react-redux';
import moment from 'moment';
// styles
import styles from './styles.module.scss';

const MainInfo = ({
    selectedWeaterItem
  }) => {
      console.log(selectedWeaterItem)
    return (
        <div className={styles.infoContainer}>
            <div className={styles.city}>
                London, UK
            </div>

            <div className={styles.date}>
                Mon, 10 February
            </div>

            <div className={styles.temperature}>
                {selectedWeaterItem && selectedWeaterItem.main.temp.toFixed(1)}
            </div>

            <div className={styles.wrapper}>
                <div className={styles.wind}>
                    <Icon path={mdiWeatherWindy} size={1.2} color="white"/>
                    8.7 m/s
                </div>

                <div className={styles.humidity}>
                    <Icon path={mdiWaterOutline} size={1.2} color="white"/>
                    70%
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({weatherForecast: { weatherItems, selectedDay, selectedHour } }) => ({
    selectedWeaterItem: weatherItems.find( item => moment(item.dt_txt).format('dddd') === selectedDay &&  moment(item.dt_txt).format('h a') === selectedHour)
});
  
  export default connect(
    mapStateToProps
  )(MainInfo);

