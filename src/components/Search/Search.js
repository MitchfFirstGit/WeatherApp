// modules
import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMenu, mdiMagnify } from '@mdi/js';
import { connect } from 'react-redux';
import AutocompleteInput from '../AutocompleteInput';
// Redux
import { getWeatherForecast } from '../../actions/actions';
// styles
import styles from './styles.module.scss';

const Search = ({
    getWeatherForecast
}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e, value) => {
        e.preventDefault();
        
        if(inputValue || value) getWeatherForecast(value ? value : inputValue);
    }

    const handleChange = (value) => {
        setInputValue(value);
    }

    return (
        <div className={styles.searchContainer}>
            <button className={styles.button}>
                <Icon path={mdiHeart} size={1} color="white" />
            </button>

            <form onSubmit={handleSubmit} className={styles.form}>

                <AutocompleteInput inputValue={inputValue} onInputChange={handleChange} onCityClick={handleSubmit}/>
                
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
