import React from "react";
import { useState, useEffect } from 'react';
import songId from './songId'
import SearchResults from './SearchResults'
import styles from './SearchBar.module.css'


export default function SearchBar() {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchResults(searchInput)
    }
    

    return (
            <form onSubmit={handleSubmit}>
            <input
                className="searchBar"
                type="search"
                placeholder="Search here"
                onChange={handleSearch}
                // value={searchInput}
            />
                {/* <label>Search</label>
                <input 
                    type="submit"
                    value="Submit"
                    onSubmit={handleSubmit}
                /> */}
            <button type="submit" >
                Submit
            </button>
                <div className="primarycontainer">
                    <SearchResults searchResults={searchResults}/>
                </div>
            </form>
    )
}