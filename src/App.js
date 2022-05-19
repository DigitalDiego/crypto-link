import React, {useState} from 'react'
import {Nav, Market, Watchlist, News, Coin} from "./components"
import {Routes, Route} from "react-router-dom"
import {IoIosArrowUp} from "react-icons/io"
const App = () => {
  const [button, setButton] = useState(false)
  const scrollUp = () => {
    window.scrollTo(0, 0)
  }
  const handleButton = () => {
    if(window.scrollY >= 100){
      setButton(true)
    } else {
      setButton(false)
    }
  }
  window.addEventListener("scroll", handleButton)
  return (
    <div className='min-h-screen bg-gray-900 text-gray-200'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Market/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
      </Routes>
      <button className={button ? 'fixed bottom-[1em] right-1/2 bg-gray-200/50 w-[2em] h-[2em] grid place-items-center text-gray-200 rounded-full border-none outline-none cursor-pointer backdrop-blur-sm text-lg translate-x-1/2' : 'fixed bottom-[1em] right-1/2 bg-gray-200/50 w-[2em] h-[2em] grid place-items-center text-gray-200 rounded-full border-none outline-none cursor-pointer backdrop-blur-sm text-lg translate-x-1/2 hidden'} onClick={scrollUp}>
        <IoIosArrowUp/>
      </button>
    </div>
  )
}

export default App