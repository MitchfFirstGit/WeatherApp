// modules
import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import cx from "classnames";
// selectors
import { cityFullNameSelector, isLikedSelector } from '../../reselect';
// components
import AutocompleteInput from '../AutocompleteInput';
import Icon from '../Icon';
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
    }, [inputValue]);

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
                <Icon iconName="like" className={styles.icon} />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>

                <AutocompleteInput
                    inputValue={inputValue}
                    onInputChange={handleChange}
                    onCityClick={handleSubmit}
                />

                <button className={styles.searchButton}>
                    <Icon iconName="search" className={styles.icon} />
                </button>
            </form >

            <button className={styles.button} onClick={handleMenuClick}>
                <Icon iconName="menu" className={styles.icon} />
            </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentCity: cityFullNameSelector(state),
    menuVisibility: state.menuVisibility,
    isLiked: isLikedSelector(state)
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
