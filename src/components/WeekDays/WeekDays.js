// modules
import React, { useState } from 'react';
import cx from 'classnames';
// styles
import styles from './styles.module.scss';

function WeekDays() {
    const [activeDay, setActiveDay ] = useState('Today1');
    const handleClick = ({target}) => {
        setActiveDay(target.innerHTML)
    };

    return (
            <ul className={styles.daysContainer}>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today1' })} onClick={handleClick} >Today1</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today2' })} onClick={handleClick}>Today2</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today3' })} onClick={handleClick}>Today3</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today4' })} onClick={handleClick}>Today4</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today5' })} onClick={handleClick}>Today5</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today6' })} onClick={handleClick}>Today6</li>
                <li className={cx(styles.day, { [styles.activeDay]: activeDay === 'Today7' })} onClick={handleClick}>Today7</li>
            </ul>
    );
}

export default WeekDays;
