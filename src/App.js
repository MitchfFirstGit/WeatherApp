// modules
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// components
import FirstInteraction from './components/FirstInteraction';
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
  getWeatherForecast,
  lastViewedCities,
  favoriteCitiesList
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuVisibility = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (lastViewedCities.length) {
      getWeatherForecast(lastViewedCities[lastViewedCities.length - 1]);
    } else if (favoriteCitiesList) {
      getWeatherForecast(favoriteCitiesList[favoriteCitiesList.length - 1]);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Search />
      {lastViewedCities.length > 0 || favoriteCitiesList.length > 0
        ? <>
          <MainInfo />
          <WeekDays />
          <Day />
        </>
        : <FirstInteraction />
      }
      <Menu handleMenuClick={handleMenuVisibility} menuVisibility={showMenu} />
    </div>
  );
}


const mapStateToProps = ({ lastViewedCities, favoriteCitiesList }) => ({
  lastViewedCities,
  favoriteCitiesList
});

const mapDispatchToProps = {
  getWeatherForecast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
