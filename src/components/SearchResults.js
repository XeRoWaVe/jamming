import React, {useState} from "react";
import {data} from '../data'
import styles from './SearchResults.module.css'



const SearchResults = ({ searchResults }) => {

    const [playList, setPlayList] = useState([])
    const [title, setTitle] = useState('')

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

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <form className="playlist" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="playlist"
                            onChange={handleChange}
                             />
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
                        <button type="Submit">Save to Spotify</button>
                        </form>
                        </div>
                )
            }
        </div>
    )
}

export default SearchResults

