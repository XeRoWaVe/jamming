import React, {useState} from "react";
import {data} from '../data'
import styles from './SearchResults.module.css'
import {data2} from '../data2'



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

    const handleSave = (e) => {
        
        setPlayList([]);
    }

    return (
        <div className="primarycontainer">
            <table className="searchlist">
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Album</th>
                </tr>
                {data2.filter((item) => {
                    return searchResults.toLowerCase() === '' ? item : item.song_name.toLowerCase().includes(searchResults);
                }).map((item) => {
                    return (
                    <tr key={item.id}>
                        <td>{item.Song}</td>
                        <td>{item.Artist}</td>
                            <td>{item.Album}</td>
                            <td><button onClick={()=>handleAddToPlaylist(item)}>Add</button></td>
                    </tr>
                )
                })}
            </table>
            {
                !!playList.length && (
                    <div>
                        <form className="playlist" onSubmit={handleSave}>
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
                                        <td>{item.Song}</td>
                                        <td>{item.Artist}</td>
                                        <td>{item.Album}</td>
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

