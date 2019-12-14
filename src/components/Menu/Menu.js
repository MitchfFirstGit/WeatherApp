// modules
import React, { useState } from 'react';
import cx from 'classnames';
import { mdiClose, mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
// styles
import styles from './styles.module.scss';

const Menu = ({
    handleMenuClick,
    menuVisibility
}) => {
    const [showFavoriteCities, setShowFavoriteCities] = useState(false);

    return (
        <>
            < div className={cx(styles.menuContainer, { [styles.menuContainerOpen]: true })}>
                <div className={styles.closeBtn}>
                    <Icon path={mdiClose} size={1} />

                    <ul className={styles.menuList}>
                        <li className={styles.item}>
                            Favorite cities list
                        </li>

                        <li>
                            <ul className={styles.favoriteCitiesDropDown}>
                                <li className={styles.favoriteCity}>
                                    City1

                                    <Icon path={mdiDelete} />
                                </li>

                                <li className={styles.favoriteCity}>
                                    City2

                                    <Icon path={mdiDelete} />
                                </li>

                                <li className={styles.favoriteCity}>
                                    City3

                                    <Icon path={mdiDelete} />
                                </li>
                            </ul>
                        </li>


                        <li className={styles.item}>
                            Recently viewed cities
                        </li>

                        <li className={styles.item}>
                            Enable dark mode
                        </li>

                        <li className={styles.item}>
                            Install app
                        </li>
                    </ul>
                </div>

                hello
            </div >

        </>
    );
}

export default Menu;
