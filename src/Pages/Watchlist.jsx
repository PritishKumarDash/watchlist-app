import React from 'react'
import { useWatchlist } from '../Context/WatchlistContext'

const Watchlist = () => {
    const { watchlist, removeFromWatchlist } = useWatchlist();
    
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>Your Watchlist</h1>

      {watchlist.length === 0 && (
        <p className='text-gray-500 text-lg'>Your watchlist is empty..</p>
    )}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {watchlist.map((m) => (
            <div key={m.imdbID} className='border rounded shadow flex flex-col'>
                <img src={m.Poster} alt={m.Title}
       className='w-full h-100 object-cover rounded-t' />
                 <div className="p-3 flex flex-col">
              <h3 className="font-semibold">{m.Title}</h3>
              <p className="text-gray-500 text-sm">{m.Year}</p>
              <p className='text-xl text-gray-700'>IMDBID: {m.imdbID}</p>

              <p className='text-xl text-gray-700'>Type: {m.Type}</p>
              <button
                onClick={() => removeFromWatchlist(m.imdbID)}
                className="bg-red-600 text-white rounded py-1 mt-2 active:scale-95"
              >Remove from Watchlist</button>
            </div>
            </div>
        ))}
      </div>
    </div>

  )
}

export default Watchlist
