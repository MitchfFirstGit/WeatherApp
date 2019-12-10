// modules
import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMenu } from '@mdi/js';
import { connect } from 'react-redux';
// Redux
import { getWeatherForecast } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast
}) => {
    const [city, setCity] = useState('');
    // useEffect(() => {
    //     getWeatherForecast();
    // }, []);
    const handleSubmit = e => {
        e.preventDefault();
        // getWeatherForecast(city);
    }

    const handleChange = ({ target }) => {
        setCity(target.value)
    }
    

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <button className={styles.button}>
                <Icon path={mdiHeart} size={1} color="white" />
            </button>
            
            <input
             placeholder="Type location..." 
             className={styles.input} 
             value={city}
             onChange={handleChange}
             />

            <button className={styles.button}>
                <Icon path={mdiMenu} size={1} color="white" />
            </button>
        </form >
    );
}

const mapDispatchToProps = {
    getWeatherForecast
};

export default connect(
    null,
    mapDispatchToProps
)(Search);
