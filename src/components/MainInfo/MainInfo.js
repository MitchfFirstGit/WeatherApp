// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherWindy, mdiWaterOutline  } from '@mdi/js';
// styles
import styles from './styles.module.scss';

function MainInfo() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.city}>
                London, UK
            </div>

            <div className={styles.date}>
                Mon, 10 February
            </div>

            <div className={styles.temperature}>
                23
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

export default MainInfo;
