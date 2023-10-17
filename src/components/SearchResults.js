import React from "react";
import {data} from '../data'
import styles from './SearchResults.module.css'

const SearchResults = ({ searchResults }) => {
    return (
        <div>
            <table className="searchlist">
                <tr>
                    <th>Id</th>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                </tr>
                {data.filter((item) => {
                    return searchResults.toLowerCase() === '' ? item : item.song_name.toLowerCase().includes(searchResults);
                }).map((item) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.song_name}</td>
                        <td>{item.artist_name}</td>
                        <td>{item.album_name}</td>
                    </tr>
                )
                })}
            </table>
        </div>
    )
}

export default SearchResults

