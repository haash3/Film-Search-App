import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./movie-card";
//  Declarations
const API_URL = 'http://www.omdbapi.com?apikey=7eb1cbe8';


// Functions
const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('SpiderMan')
    }, []);

    // return statement
    return (
        <div className="app">
            <h1>Movie App</h1>
            <div className="search">
                <input
                    placeholder="Search for Movie"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="'search-button"
                    onClick={() => searchMovies(search)}
                />

            </div>
            {
                movies?.length>0
                ?(
                    <div className="container">
                    {movies.map((movie) =>(
                        <MovieCard movie={movie} />
                    ))}
                </div>

                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                        </div>
                )
            }

            

        </div>
    )
}

export default App