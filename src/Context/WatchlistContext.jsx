import React, { Children } from 'react'
import { createContext, useContext, useState } from 'react'
import Watchlist from '../Pages/Watchlist';

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    const exiSts = watchlist.some((m) => m.imdbID === movie.imdbID);
    if(!exiSts){
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((m) => m.imdbID !== id);
    setWatchlist(updated);
  }

  const value = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist
  };

  return(
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  )
}



export const useWatchlist = () => useContext(WatchlistContext);
