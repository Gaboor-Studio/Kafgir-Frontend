import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from "../SearchBar/SearchBar";
import ToggleButton from '../ToggleButton/ToggleButton';
import classes from './AppBar.module.css';

const appBar = (props) => {
    return (
        <header className={classes.AppBar}>
            <ToggleButton onToggle={props.onDrawerToggle}/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems >
                    <SearchBar />
                </NavigationItems>
            </nav>
        </header>
    );
}

export default appBar;