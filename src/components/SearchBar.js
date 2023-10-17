import React from "react";
import { useState } from 'react';
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
        <div>
            <input
                className="searchBar"
                type="search"
                placeholder="Search here"
                onChange={handleSearch}
                value={searchInput}
            />
            <form>
                <label>Search</label>
                <input 
                    type="submit"
                    value="Submit"
                    onSubmit={handleSubmit}
                />
            </form>
            <SearchResults searchResults={searchResults}/>
        </div>
    )
        // Add a search button here
}