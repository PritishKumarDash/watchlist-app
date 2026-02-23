import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import MovieCard from '../Components/MovieCard'

const Home = () => {
   
    const [searchText, setTextMovie] = useState("")
    const [movie, setMovie] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState("")

    const API_KEY = "thewdb";

    const searchMovie = async () =>{
       if(!(searchText).trim())return

        setloading(true);
        setMovie([])
        seterror("")
        
    try{
         const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`);
         if(res.data.Response === "True"){
            setMovie(res.data.Search)
         }else{
            seterror("Cannot load the movie...");
         }
    } catch(err){
        seterror("Something went wrong!!");
    }    
    setloading(false);
    };
 
  return (
    <div className='p-6 '>
        <div className='flex items-center justify-center'>
       <h1 className='text-5xl text-gray-800 font-bold'>🎬 Movie Explorer</h1> 
       </div>
       <p className='flex items-center justify-center mt-8 text-2xl text-gray-600 font-bold'>Search movies and build your own watchlist by yourself....</p>
       <div className='flex items-center justify-center mt-10 gap-5'>
        <input type="text"
        value={searchText}
        placeholder='Search movies.....'
        onChange={(e) =>{
            setTextMovie(e.target.value);
        }}
        className='border-black px-10 py-4 rounded w-256'
        />
        <button className='px-10 py-4 bg-emerald-700 text-white rounded active:scale-90' onClick={searchMovie}>Search</button>
       </div>

       {loading && <p className='mt-6 text-4xl flex items-center justify-center text-blue-600'>Loading......</p>}
       {error && <p className='mt-6 text-2xl flex items-center justify-center text-red-500'>{error}</p>}

       {!loading && movie.length === 0 && !error && (
        <p className= " text-3xl flex items-center justify-center text-gray-500 mt-6">Start by searching for a movie 🎥</p>
      )}

       <div className='items-center justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6'>
        {movie.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
       </div>
    </div>
  )
}

export default Home
