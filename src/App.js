// modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
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
  favoriteCitiesList,
  weatherItems,
  darkMode
}) => {
  useEffect(() => {
    if (lastViewedCities.length) {
      getWeatherForecast(lastViewedCities[lastViewedCities.length - 1]);
    } else if (favoriteCitiesList.length) {
      getWeatherForecast(favoriteCitiesList[favoriteCitiesList.length - 1]);
    }
  }, []);

  return (
    <>
      <div className={cx(styles.overlay, { [styles.overlayDark]: darkMode })} />
      <div className={cx(styles.container, { [styles.containerDark]: darkMode })}>
        <Search />
        {lastViewedCities.length || favoriteCitiesList.length || weatherItems.length
          ? <>
            <MainInfo />
            <WeekDays />
            <Day />
          </>
          : <FirstInteraction />
        }
        <Menu />
      </div>
    </>
  );
}


const mapStateToProps = ({ lastViewedCities, favoriteCitiesList, weatherForecast, darkMode }) => ({
  lastViewedCities,
  favoriteCitiesList,
  weatherItems: weatherForecast.weatherItems,
  darkMode
});

const mapDispatchToProps = {
  getWeatherForecast
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
