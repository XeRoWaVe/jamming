import React, {useState} from "react";
import {data} from '../data'
import styles from './SearchResults.module.css'



const SearchResults = ({ searchResults }) => {

    const [playList, setPlayList] = useState([])

    const handleAddToPlaylist = (song) => {
        if (!playList.includes(song))
        setPlayList([...playList, song])
    }

    const handleRemoveFromPlayList = (song) => {
        const newPlayList = playList.filter((item) => {
            return item.id !== song.id
        })
        setPlayList(newPlayList)
    }

    return (
        <div className="primarycontainer">
            <table className="searchlist">
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                </tr>
                {data.filter((item) => {
                    return searchResults.toLowerCase() === '' ? item : item.song_name.toLowerCase().includes(searchResults);
                }).map((item) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.song_name}</td>
                        <td>{item.artist_name}</td>
                            <td>{item.album_name}</td>
                            <td><button onClick={()=>handleAddToPlaylist(item)}>Add</button></td>
                    </tr>
                )
                })}
            </table>
            {
                !!playList.length && (
                    <div>
                        <h2>Playlist</h2>
                        <table >
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Album</th>
                            </tr>
                            {playList.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.song_name}</td>
                                        <td>{item.artist_name}</td>
                                        <td>{item.album_name}</td>
                                        <td> <button className="removebutton" onClick={() => handleRemoveFromPlayList(item)}>
                                        Remove
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                        </div>
                )
            }
        </div>
    )
}

export default SearchResults

