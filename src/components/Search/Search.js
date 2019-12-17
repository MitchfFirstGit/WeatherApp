// modules
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMagnify } from '@mdi/js';
import { connect } from 'react-redux';
import cx from 'classnames';
// components
import AutocompleteInput from '../AutocompleteInput';
// services
import { LocalStorageService } from '../../services/storage';
// Redux
import { getWeatherForecast, setMenuVisibility } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast,
    setMenuVisibility,
    menuVisibility,
    currentCity
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e, value) => {
        e.preventDefault();

        if (inputValue || value) {
            getWeatherForecast(value ? value : inputValue)
            setInputValue('');
        };
    }

    const handleChange = (value) => {
        setInputValue(value);
    }

    const handleMenuClick = () => {
        setMenuVisibility(!menuVisibility);
    }

    const handleFavoriteIconClick = () => {
        const favoriteCitiesKey = 'favoriteCities';
        let favoriteCitiesList = LocalStorageService.getItem(favoriteCitiesKey, true);

        if (favoriteCitiesList) {
            if (favoriteCitiesList.length < 5) {
                favoriteCitiesList.push(currentCity);
                LocalStorageService.setItem(favoriteCitiesKey, favoriteCitiesList, true);
            } else {
                favoriteCitiesList.shift();
                favoriteCitiesList.push(currentCity);
                LocalStorageService.setItem(favoriteCitiesKey, favoriteCitiesList, true);
            }
        } else {
            // favoriteCitiesList doesn't exist
            favoriteCitiesList = [];
            favoriteCitiesList.push(currentCity);
            LocalStorageService.setItem(favoriteCitiesKey, favoriteCitiesList, true);
        }
    }

    return (
        <div className={styles.searchContainer}>
            <button className={styles.button} onClick={handleFavoriteIconClick}>
                <Icon path={mdiHeart} size={1} color="white" />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>

                <AutocompleteInput inputValue={inputValue} onInputChange={handleChange} onCityClick={handleSubmit} />

                <button className={styles.searchButton}>
                    <Icon path={mdiMagnify} size={1} color="white" />
                </button>
            </form >

            <button className={cx(styles.menuButton, { [styles.closeButton]: menuVisibility })} onClick={handleMenuClick}>
                <div className={styles.middleLine} />
            </button>
        </div>
    );
}

const mapStateToProps = ({weatherForecast, menuVisibility}) => ({
    currentCity: weatherForecast.mainInfo.city && `${weatherForecast.mainInfo.city.name}, ${weatherForecast.mainInfo.city.country}`,
    menuVisibility
});

const mapDispatchToProps = {
    getWeatherForecast,
    setMenuVisibility
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
