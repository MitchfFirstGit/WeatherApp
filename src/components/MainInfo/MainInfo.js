// modules
import React from 'react';
// styles
import styles from './styles.module.scss';

function MainInfo() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.city}>
                London, UK
            </div>
            
            <div className={styles.date}>
                Mon, 10 February
            </div>

            <div className={styles.temperature}>
                23 
            </div>
        </div>
    );
}

export default MainInfo;
