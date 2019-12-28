// modules
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
// hooks
import useOutsideClick from '../../hooks/useOutsideClick';
// styles
import styles from './styles.module.scss';
// cities
import { CITIES } from '../../data/cities';

const AutocompleteInput = ({
    inputValue,
    onInputChange,
    onCityClick,
    errorMessage,
    darkMode
}) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [filteredCities, setFilteredCities] = useState([]);

    const ref = useRef();

    useOutsideClick(ref, () => {
        setShowSuggestions(false);
    });

    const handleChange = ({ target }) => {
        const userInput = target.value;
        const filteredSuggestionCitites = CITIES.filter(
            city =>
                city.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setShowSuggestions(true);
        setFilteredCities(filteredSuggestionCitites);
        onInputChange(userInput);
    }

    const handleClick = (e) => {
        onInputChange(e.currentTarget.innerText);
        setShowSuggestions(false);
        onCityClick(e, e.currentTarget.innerText);
    };

    const suggestionsListComponent = () => {
        if (showSuggestions && inputValue) {
            if (filteredCities.length) {
                return (
                    <>
                        <div className={darkMode ? styles.suggestionsOverlay : ""} />
                        <ul className={cx(styles.suggestions, { [styles.suggestionsDark]: darkMode })} ref={ref}>
                            {filteredCities.slice(0, 5).map(city => {
                                return (
                                    <li key={`${city.name}${city.country}`} onClick={handleClick}>
                                        {`${city.name}, ${city.country}`}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                );
            }
        }
    }

    return (
        <>
            <input
                placeholder="Type location..."
                className={cx(styles.input, { [styles.darkInput]: darkMode && showSuggestions && inputValue })}
                value={inputValue}
                onChange={handleChange}
            />

            {suggestionsListComponent()}

            {errorMessage && inputValue.length === 0 && <div className={styles.errorMessage}> {errorMessage} </div>}
        </>
    );
}

const mapStateToProps = ({ weatherForecast, darkMode }) => ({
    errorMessage: weatherForecast.error.message,
    darkMode
});

export default connect(
    mapStateToProps
)(AutocompleteInput);
