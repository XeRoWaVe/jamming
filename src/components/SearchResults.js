import React, {useState} from "react";
import {data} from '../data'
import styles from './SearchResults.module.css'



const SearchResults = ({ searchResults }) => {

    const [playList, setPlayList] = useState([])

    const handleAddToPlaylist = (song) => {
        setPlayList([...playList, song])
    }

    const handleRemoveFromPlayList = (song) => {
        const newPlayList = playList.filter((item) => {
            return item.id !== song.id
        })
        // this is a lot of logic for one file right? i dont even want to think about having to pass state down
        // absolutely yes, but with growing complexity comes large file sizes. we have some files over a thousand lines long. and when you super break things out state 
        // bangbang just enforces the boolean value of the expression. so if the expression is truthy, it will be true, if it's falsy, it will be false.
        // ehh kinda not rly 

        setPlayList(newPlayList)
    }

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
                                <th>Id</th>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Album</th>
                            </tr>
                            {playList.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.song_name}</td>
                                        <td>{item.artist_name}</td>
                                        <td>{item.album_name}</td>
                                        <td> <button onClick={() => handleRemoveFromPlayList(item)}>
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

