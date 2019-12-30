// modules
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMagnify, mdiMenu } from '@mdi/js';
import { connect } from 'react-redux';
import cx from "classnames";
// components
import AutocompleteInput from '../AutocompleteInput';
// Redux
import { getWeatherForecast, setMenuVisibility, addToFavoriteCitiesList } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast,
    setMenuVisibility,
    menuVisibility,
    currentCity,
    addToFavoriteCitiesList,
    isLiked,
}) => {
    const [inputValue, setInputValue] = useState('');
console.log(isLiked)
    const handleSubmit = (e, value) => {
        e.preventDefault();

        if (inputValue || value) {
            const city = value ? value : inputValue;

            getWeatherForecast(city);
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
        if (currentCity) addToFavoriteCitiesList(currentCity);
    }

    return (
        <div className={styles.searchContainer}>
            <button className={cx(styles.button, { [styles.likedCity]: isLiked })} onClick={handleFavoriteIconClick}>
                <Icon path={mdiHeart} size={1}  />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>

                <AutocompleteInput inputValue={inputValue} onInputChange={handleChange} onCityClick={handleSubmit} />

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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
