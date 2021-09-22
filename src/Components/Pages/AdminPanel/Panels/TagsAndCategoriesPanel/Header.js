import React, { useState } from "react"
import classes from "./Header.module.css"

const Header = (props) => {
    const [searchText, setSearchText] = useState('');
    const submitSearch = (event) => {
        event.preventDefault();
        props.onSearch(searchText);
    }
    return (
        <div className={classes.headerContainer}>
            <h3 className={classes.usersText}>{props.title}</h3>
            <form className={classes.form} onSubmit={submitSearch}>
                <input type="text" value={searchText} className={classes.searchBar} onChange={(event) => setSearchText(event.target.value)} placeholder={"جستجو در " + props.title}></input>
                <button type="submit" className={classes.searchButton}>جستجو</button>
            </form>
        </div>
    );
}

export default Header;