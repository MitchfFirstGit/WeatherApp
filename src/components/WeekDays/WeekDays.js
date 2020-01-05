// modules
import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
// Redux 
import { setSelectedDay } from '../../actions/actions';
// selectors
import { uniqueDaysSelector, formattedHoursSelector } from '../../reselect';
// styles
import styles from './styles.module.scss';

const WeekDays = ({
  weekDays,
  setSelectedDay,
  selectedDay,
  formattedHours
}) => {
  const handleClick = ({ target }) => {
    const selectedDay = target.innerHTML;
    const firstHourOfDay = formattedHours.find(item => item.day === target.innerHTML)

    setSelectedDay(selectedDay, firstHourOfDay.hour);
  };

  return (
    <>
      <ul className={styles.daysContainer}>
        {weekDays.map(item =>
          <li
            className={cx(styles.day, { [styles.activeDay]: selectedDay === item })}
            onClick={handleClick}
            key={item}
          >
            {item}
          </li>)
        }
      </ul>
    </>

  );
}

const mapStateToProps = ({ weatherForecast }) => ({
  weekDays: uniqueDaysSelector(weatherForecast),
  selectedDay: weatherForecast.selectedDay,
  formattedHours: formattedHoursSelector(weatherForecast)
});

const mapDispatchToProps = {
  setSelectedDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekDays);
