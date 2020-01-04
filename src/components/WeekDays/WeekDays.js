// modules
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import moment from 'moment';
import { connect } from 'react-redux';
// Redux 
import { setSelectedDay } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const WeekDays = ({
  weatherItems,
  setSelectedDay,
  selectedDay
}) => {
  const [days, setDays] = useState(null);

  useEffect(() => {
    if (weatherItems) {
      let uniqueDays = new Set();

      weatherItems.forEach(item => {
        uniqueDays.add(moment(item.dt_txt).format('dddd'))
      })

      setDays([...uniqueDays]);
    }
  }, [weatherItems])

  const handleClick = ({ target }) => {
    const selectedDay = target.innerHTML;
    const firstHourOfDay = weatherItems.find(item => moment(item.dt_txt).format('dddd') === target.innerHTML)

    setSelectedDay(selectedDay, moment(firstHourOfDay.dt_txt).format('h a'));
  };

  return (
    <>
      {weatherItems && days && <ul className={styles.daysContainer}>
        {days.map(item =>
          <li
            className={cx(styles.day, { [styles.activeDay]: selectedDay === item })}
            onClick={handleClick}
            key={item}
          >
            {item}
          </li>)
        }
      </ul>
      }
    </>

  );
}

const mapStateToProps = ({ weatherForecast: { mainInfo, selectedDay } }) => ({
  weatherItems: mainInfo.list,
  selectedDay: selectedDay
});

const mapDispatchToProps = {
  setSelectedDay
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeekDays);
