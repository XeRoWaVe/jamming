import React from "react";
import { useState, useEffect } from 'react';
import songId from './songId'
import SearchResults from './SearchResults'


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
            <SearchResults searchResults={searchResults}/>
            </form>
    )
        // Add a search button here
}