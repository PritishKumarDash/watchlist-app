import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import { WatchlistProvider } from './Context/WatchlistContext';
import Watchlist from './Pages/Watchlist';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WatchlistProvider>
    <Navbar />
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Watchlist' element={<Watchlist />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>

      </Routes>
      </WatchlistProvider>
      
    </>
  )
}

export default App
