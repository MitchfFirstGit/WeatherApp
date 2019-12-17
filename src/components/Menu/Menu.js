// modules
import React, { useState } from 'react';
import cx from 'classnames';
import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import AnimateHeight from 'react-animate-height';
import { connect } from 'react-redux';
// services
import { LocalStorageService } from '../../services/storage';
// styles
import styles from './styles.module.scss';

const Menu = ({
    menuVisibility
}) => {
    const [showFavoriteCities, setShowFavoriteCities] = useState(0);
    const [showRecentlyViewedCities, setRecentlyViewedCities] = useState(0);
    // const [favoriteCitiesList, setFavoriteCitiesList] = useState(LocalStorageService.getItem('favoriteCities', true) || null);

    const handleFavoriteCitiesClick = () => {
        setShowFavoriteCities(showFavoriteCities === 0 ? 'auto' : 0);
    }

    const handleRecentlyViewedCitiesClick = () => {
        setRecentlyViewedCities(showRecentlyViewedCities === 0 ? 'auto' : 0);
    }

    const handleRemoveFavoriteCity = ({ currentTarget }) => {
        // const favoriteCitiesList = LocalStorageService.getItem('favoriteCities', true);

        // const filteredCitiesList = favoriteCitiesList.filter(city => city !== currentTarget.id);

        // LocalStorageService.setItem('favoriteCities', filteredCitiesList, true);
        // setFavoriteCitiesList(filteredCitiesList);
    }

    const renderFavoriteCities = () => {
        // if (favoriteCitiesList) return favoriteCitiesList.map(city => <div className={styles.city} key={city}>
        //     {city}
        //     <Icon path={mdiDelete} onClick={handleRemoveFavoriteCity} id={city} />
        // </div>)

        return <div className={styles.noCities}>
            You don't have any favorite cities, click heart button to add one
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
                            <div className={styles.city}>
                                City1

                                <Icon path={mdiDelete} />
                            </div>

                            <div className={styles.city}>
                                City2

                                <Icon path={mdiDelete} />
                            </div>

                            <div className={styles.city}>
                                City3

                                <Icon path={mdiDelete} />
                            </div>
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

const mapStateToProps = state => ({
    menuVisibility: state.menuVisibility,
});

export default connect(
    mapStateToProps
)(Menu);
