// modules
import React, { useState, useRef } from 'react';
import cx from 'classnames';
import { mdiDelete, mdiClose } from '@mdi/js';
import Icon from '@mdi/react';
import AnimateHeight from 'react-animate-height';
import { connect } from 'react-redux';
// Redux
import {
    removeFromFavoriteCitiesList,
    removeFromLastViewedCities,
    getWeatherForecast,
    setMenuVisibility,
} from '../../actions/actions';
// hooks
import useOutsideClick from '../../hooks/useOutsideClick';
// styles
import styles from './styles.module.scss';

const Menu = ({
    menuVisibility,
    favoriteCitiesList,
    removeFromFavoriteCitiesList,
    lastViewedCities,
    removeFromLastViewedCities,
    getWeatherForecast,
    setMenuVisibility,
}) => {
    const [showFavoriteCities, setShowFavoriteCities] = useState(0);
    const [showRecentlyViewedCities, setRecentlyViewedCities] = useState(0);
    const ref = useRef();

    useOutsideClick(ref, () => {
        setMenuVisibility(false);
        if (showFavoriteCities === 'auto') setShowFavoriteCities(0);
        if (showRecentlyViewedCities === 'auto') setRecentlyViewedCities(0);
    });

    const handleMenuClose = () => {
        if (showFavoriteCities === 'auto') setShowFavoriteCities(0);
        if (showRecentlyViewedCities === 'auto') setRecentlyViewedCities(0);

        setMenuVisibility(!menuVisibility);
    }

    const handleFavoriteCitiesClick = () => {
        setShowFavoriteCities(showFavoriteCities === 0 ? 'auto' : 0);
    }

    const handleRecentlyViewedCitiesClick = () => {
        setRecentlyViewedCities(showRecentlyViewedCities === 0 ? 'auto' : 0);
    }

    const handleRemoveFavoriteCity = ({ currentTarget }) => {
        removeFromFavoriteCitiesList(currentTarget.id);
    }

    const handleRemoveLastViewedCity = ({ currentTarget }) => {
        removeFromLastViewedCities(currentTarget.id);
    }

    const handleCityClick = ({ currentTarget, target }) => {
        if (currentTarget === target) {
            handleMenuClose();
            getWeatherForecast(currentTarget.id);
        }
    }

    const renderFavoriteCities = () => {
        if (favoriteCitiesList.length) return favoriteCitiesList.map(city => (
            <div
                className={styles.city}
                key={city}
                id={city}
                onClick={handleCityClick}
            >
                {city}
                <Icon path={mdiDelete} onClick={handleRemoveFavoriteCity} id={city} />
            </div>
        ))

        return <div className={styles.noCities}>
            Oops, empty here, click heart button to add a city
        </div>
    }

    const renderLastViewedCities = () => {
        if (lastViewedCities.length) return lastViewedCities.map(city => (
            <div
                className={styles.city}
                key={city}
                id={city}
                onClick={handleCityClick}
            >
                {city}
                <Icon path={mdiDelete} onClick={handleRemoveLastViewedCity} id={city} />
            </div>
        ))

        return <div className={styles.noCities}>
            Oops, empty here, click search button to add a city
        </div>
    }

    return (
        <>
            <div className={menuVisibility ? styles.overlay : ""}> </div>

            <div className={cx(styles.menuContainer, { [styles.menuContainerOpen]: menuVisibility })} ref={ref}>
                <button className={styles.button} onClick={handleMenuClose}>
                    <Icon path={mdiClose} size={1} className={styles.closeIcon} />
                </button>

                <ul className={styles.menuList}>
                    <li className={styles.item} onClick={handleFavoriteCitiesClick}>
                        Favorite cities list
                    </li>

                    <AnimateHeight
                        duration={300}
                        height={showFavoriteCities}

                    >
                        <div className={styles.dropDown}>
                            {renderFavoriteCities()}
                        </div>
                    </AnimateHeight>

                    <li className={styles.item} onClick={handleRecentlyViewedCitiesClick}>
                        Recently viewed cities
                        </li>

                    <AnimateHeight
                        duration={300}
                        height={showRecentlyViewedCities}
                    >
                        <div className={styles.dropDown}>
                            {renderLastViewedCities()}
                        </div>
                    </AnimateHeight>

                    <li className={styles.item}>
                        Enable dark mode
                    </li>

                    <li className={styles.item}>
                        Install app
                    </li>
                </ul>
            </div>
        </>
    );
}

const mapStateToProps = ({ menuVisibility, favoriteCitiesList, lastViewedCities }) => ({
    menuVisibility,
    favoriteCitiesList,
    lastViewedCities
});

const mapDispatchToProps = {
    removeFromFavoriteCitiesList,
    removeFromLastViewedCities,
    getWeatherForecast,
    setMenuVisibility,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
