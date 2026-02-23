import React from 'react'
import { useWatchlist } from '../Context/WatchlistContext';

const MovieCard = ({ movie }) => {
   
    const { addToWatchlist } = useWatchlist();

    const poster = movie.Poster != "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
  return (
    <div className='flex flex-col border bg-white text-black rounded shadow hover:shadow-2xl transition'>
       <img src={poster} alt={movie.Title}
       className='w-full h-100 object-cover rounded-t' />

       <div className='flex p-5 flex-col'>
        <h2 className='font-semibold line-clamp-1 text-lg'>{movie.Title}</h2>

        <p className='text-xl text-gray-700'>Year: {movie.Year}</p>

        <p className='text-xl text-gray-700'>IMDBID: {movie.imdbID}</p>

        <p className='text-xl text-gray-700'>Type: {movie.Type}</p>

        <button className='bg-blue-600 text-white py-2 px-3 mt-4 rounded active:scale-95'
        onClick={() => addToWatchlist(movie)}
        >Add to Watchlist</button>

       </div>
    </div>
  )
}

export default MovieCard
