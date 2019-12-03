// modules
import React, { useState } from 'react';
// styles
import styles from './styles.module.scss';

function WeekDays() {
    const [activeDay, setActiveDay ] = useState('Today1');
    
    return (
            <ul className={styles.daysContainer}>
                <li className={styles.day}>Today1</li>
                <li className={styles.day}>Today2</li>
                <li className={styles.day}>Today3</li>
                <li className={styles.day}>Today4</li>
                <li className={styles.day}>Today5</li>
                <li className={styles.day}>Today6</li>
                <li className={styles.day}>Today7</li>
            </ul>
    );
}

export default WeekDays;
