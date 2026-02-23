import React from 'react'
import { Link } from "react-router-dom";
import { useWatchlist } from '../Context/WatchlistContext';


const Navbar = () => {
    const { watchlist } = useWatchlist();
  return (
    <>
      <nav className='flex justify-between text-white bg-teal-500 items-center px-10 py-7 text-xl'>
        <div className='flex gap-5'> 
        <img src="https://cdn-icons-png.flaticon.com/512/2798/2798007.png" alt="" className='w-9 h-9 rounded transition-transform duration-300 hover:scale-150' />
        <h2 className='text-2xl'>MovieWatchList</h2>
        </div>
        <div className='flex gap-6 items-center text-xl'>
          <Link to={'/Home'}>Home</Link>
          <Link to={'/Watchlist'}>Watchlist{watchlist.length > 0 && (
            <span className='absolute  bg-red-500 text-xs px-3 ml-2 py-2 rounded-full'>{watchlist.length}</span>
          )}</Link>
          {/* <Link to={'/Contact'}>Contact</Link>
          <Link to={'/About'}>About</Link> */}

        </div>
      </nav>
    </>
  )
}

export default Navbar
