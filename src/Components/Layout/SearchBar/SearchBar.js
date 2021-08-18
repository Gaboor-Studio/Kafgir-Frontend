import React from 'react';

import classes from './SearchBar.module.css';
import searchIcon from '../../../assets/navigation_icons/Vector.png';

const searchBar = (props) => {
    return(
        <div className={classes.SearchBar}>
            <input type="text"/>
            <img src={searchIcon} alt="seach_icon"/>
        </div>
    );
}

export default searchBar;