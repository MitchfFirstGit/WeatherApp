// modules
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMenu, mdiMagnify } from '@mdi/js';
import { connect } from 'react-redux';
// Redux
import { getWeatherForecast } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast
}) => {
    const [city, setCity] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        getWeatherForecast(city);
    }

    const handleChange = ({ target }) => {
        setCity(target.value)
    }

    return (
        <div className={styles.searchContainer}>
            <button className={styles.button}>
                <Icon path={mdiHeart} size={1} color="white" />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    placeholder="Type location..."
                    className={styles.input}
                    value={city}
                    onChange={handleChange}
                />
                
                <button className={styles.searchButton}>
                    <Icon path={mdiMagnify} size={1} color="white" />
                </button>
            </form >

            <button className={styles.button}>
                <Icon path={mdiMenu} size={1} color="white" />
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    getWeatherForecast
};

export default connect(
    null,
    mapDispatchToProps
)(Search);
