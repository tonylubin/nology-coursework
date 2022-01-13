import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = ({ setSearchItem }) => {
    
    const getSearchItem = (e) => {
        setSearchItem(e.target.value);
    }

    return (
       <input className={styles.inputBox} onInput={getSearchItem} type="text" placeholder='Search by name or letter...'></input>
    )
}

export default SearchBox; 
