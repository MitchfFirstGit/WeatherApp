// modules
import React from 'react';
// components
import Search from './components/Search';
import MainInfo from './components/MainInfo';
import WeekDays from './components/WeekDays';
import Day from './components/Day';
// styles
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Search />
      <MainInfo />
      <WeekDays />
      <Day />
    </div>
  );
}

export default App;
