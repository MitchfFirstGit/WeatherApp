// modules
import React, { useState } from 'react';
import cx from 'classnames';
import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import AnimateHeight from 'react-animate-height';
import { connect } from 'react-redux';
// Redux
import { removeFromFavoriteCitiesList, removeFromLastViewedCities } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Menu = ({
    menuVisibility,
    favoriteCitiesList,
    removeFromFavoriteCitiesList,
    lastViewedCities,
    removeFromLastViewedCities
}) => {
    const [showFavoriteCities, setShowFavoriteCities] = useState(0);
    const [showRecentlyViewedCities, setRecentlyViewedCities] = useState(0);

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

    const renderFavoriteCities = () => {
        if (favoriteCitiesList.length) return favoriteCitiesList.map(city => <div className={styles.city} key={city}>
            {city}
            <Icon path={mdiDelete} onClick={handleRemoveFavoriteCity} id={city} />
        </div>)

        return <div className={styles.noCities}>
            Oops, empty here, click heart button to add a city
        </div>
    }

    const renderLastViewedCities = () => {
        if (lastViewedCities.length) return lastViewedCities.map(city => <div className={styles.city} key={city}>
            {city}
            <Icon path={mdiDelete} onClick={handleRemoveLastViewedCity} id={city} />
        </div>)

        return <div className={styles.noCities}>
            Oops, empty here, click search button to add a city
        </div>
    }

    return (
        <>
            <div className={menuVisibility ? styles.overlay : ""}> </div>

            <div className={cx(styles.menuContainer, { [styles.menuContainerOpen]: menuVisibility })}>
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
    removeFromLastViewedCities
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
