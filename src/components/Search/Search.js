// modules
import React, { useState, useCallback } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMagnify, mdiMenu } from '@mdi/js';
import { connect } from 'react-redux';
import cx from "classnames";
// components
import AutocompleteInput from '../AutocompleteInput';
// Redux
import {
    getWeatherForecast,
    setMenuVisibility,
    addToFavoriteCitiesList,
    removeFromFavoriteCitiesList
} from '../../actions/actions';
// storage
import { LocalStorageService } from '../../services/storage';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast,
    setMenuVisibility,
    menuVisibility,
    currentCity,
    addToFavoriteCitiesList,
    isLiked,
    removeFromFavoriteCitiesList,
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = useCallback((e, value) => {
        e.preventDefault();

        if (inputValue || value) {
            const city = value ? value : inputValue;

            getWeatherForecast(city);
            setInputValue('');
        };
    }, []);

    const handleChange = useCallback((value) => {
        setInputValue(value);
    }, []);

    const handleMenuClick = () => {
        setMenuVisibility(!menuVisibility);
    }

    const handleFavoriteIconClick = () => {
        if (currentCity) {
            const favoriteCitiesLS = LocalStorageService.getItem('favoriteCitiesList');
            const cityInLocalStorage = favoriteCitiesLS.includes(currentCity);

            if (cityInLocalStorage) {
                removeFromFavoriteCitiesList(currentCity);
            } else {
                addToFavoriteCitiesList(currentCity);
            }
        }
    }

    return (
        <div className={styles.searchContainer}>
            <button className={cx(styles.button, { [styles.likedCity]: isLiked })} onClick={handleFavoriteIconClick}>
                <Icon path={mdiHeart} size={1} />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>

                <AutocompleteInput
                    inputValue={inputValue}
                    onInputChange={handleChange}
                    onCityClick={handleSubmit}
                />

                <button className={styles.searchButton}>
                    <Icon path={mdiMagnify} size={1} />
                </button>
            </form >

            <button className={styles.button} onClick={handleMenuClick}>
                <Icon path={mdiMenu} size={1} />
            </button>
        </div>
    );
}

const mapStateToProps = ({ weatherForecast, menuVisibility, favoriteCitiesList }) => ({
    currentCity: weatherForecast.mainInfo.city && `${weatherForecast.mainInfo.city.name}, ${weatherForecast.mainInfo.city.country}`,
    menuVisibility,
    isLiked: weatherForecast.mainInfo.city && favoriteCitiesList.includes(`${weatherForecast.mainInfo.city.name}, ${weatherForecast.mainInfo.city.country}`)
});

const mapDispatchToProps = {
    getWeatherForecast,
    setMenuVisibility,
    addToFavoriteCitiesList,
    removeFromFavoriteCitiesList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
