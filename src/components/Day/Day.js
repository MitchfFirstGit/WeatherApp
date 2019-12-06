// modules
import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherPartlyCloudy  } from '@mdi/js';
// styles
import styles from './styles.module.scss';

function Day() {
    return (
            <ul className={styles.daysContainer}>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>
                <li className={styles.dayInfo}>
                    <div className={styles.hour}>
                        3am
                    </div>
                    <Icon path={mdiWeatherPartlyCloudy } size={2.5} color="white" className={styles.weatherIcon}/>
                    <div className={styles.temperature}>
                        15
                    </div>
                </li>


            </ul>
    );
}

export default Day;
