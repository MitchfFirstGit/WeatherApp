// modules
import React, { useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiHeart, mdiMenu } from '@mdi/js';
// styles
import styles from './styles.module.scss';

function Search() {
    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=london&APPID=de1e94c85ef8c5b5b4456417ebd24daf')
            .then(response => response.json())
            .then(data => { console.log(data) })
    });

    return (
        <div className={styles.searchContainer}>
            <button className={styles.button}>
                <Icon path={mdiHeart} size={1} color="white" />
            </button>
            <input placeholder="Type location..." className={styles.input} />
            <button className={styles.button}>
                <Icon path={mdiMenu} size={1} color="white" />
            </button>
        </div>
    );
}

export default Search;
