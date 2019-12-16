// modules
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// components
import Search from './components/Search';
import MainInfo from './components/MainInfo';
import WeekDays from './components/WeekDays';
import Day from './components/Day';
import Menu from './components/Menu';
// Redux
import { getWeatherForecast } from './actions/actions';
// styles
import styles from './styles.module.scss'

const App = ({
  getWeatherForecast
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuVisibility = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    getWeatherForecast();
  }, [getWeatherForecast]);

  return (
    <div className={styles.container}>
      <Search />
      <MainInfo />
      <WeekDays />
      <Day />
      <Menu handleMenuClick={handleMenuVisibility} menuVisibility={showMenu} />
    </div>
  );
}

const mapDispatchToProps = {
  getWeatherForecast
};

export default connect(
  null,
  mapDispatchToProps
)(App);
