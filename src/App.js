// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// components
import Search from './components/Search';
import MainInfo from './components/MainInfo';
import WeekDays from './components/WeekDays';
import Day from './components/Day';
// Redux
import { getWeatherForecast } from './actions/actions';
// styles
import styles from './styles.module.scss'

const App = ({
  weatherForecast,
  getWeatherForecast
}) => {
  useEffect(() => {
    getWeatherForecast();
}, [getWeatherForecast]);

  return (
    <div className={styles.container}>
      <Search />
      <MainInfo />
      <WeekDays />
      <Day />
    </div>
  );
}

const mapStateToProps = state => ({
  weatherForecast: state.weatherForecast,
});

const mapDispatchToProps = {
  getWeatherForecast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
