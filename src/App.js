import React from 'react'
import {Nav, Market, Watchlist, News, Coin} from "./components"
import {Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-gray-200 scrollbar scrollbar-track scrollbar-thumb'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Market/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
      </Routes>
    </div>
  )
}

export default App