// modules
import React from 'react';
// components
import MenuIcon from './components/MenuIcon';
import LikeIcon from './components/LikeIcon';
import SearchIcon from './components/SearchIcon';
import CloseIcon from './components/CloseIcon';
import RemoveIcon from './components/RemoveIcon';

const Icon = ({ iconName, className, onClick, id }) => {
    const renderIcon = () => {
        switch (iconName) {
            case 'menu':
                return <MenuIcon className={className} />;
            case 'like':
                return <LikeIcon className={className} />;
            case 'search':
                return <SearchIcon className={className} />;
            case 'close':
                return <CloseIcon className={className} />
            case 'remove':
                return <RemoveIcon className={className} onClick={onClick} id={id} />
            default:
                return <></>;
        }
    }
    return (
        <>
            {renderIcon()}
        </>
    );
}

export default Icon;
