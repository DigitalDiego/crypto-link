import React, {useState} from 'react'
import {Nav, SideMenu} from "./Components"
import {Home, CoinsOne, CoinsTwo, Coin, News} from "./Pages"
import {Routes, Route} from "react-router-dom"
const App = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  const handleScroll = () => {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Nav nav={nav} handleNav={handleNav} handleScroll={handleScroll}/>
      <SideMenu nav={nav} handleNav={handleNav} handleScroll={handleScroll}/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/coins/page=1" element={<CoinsOne/>}/>
        <Route path="/coins/page=2" element={<CoinsTwo/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
        <Route path="/news" element={<News/>}/>
      </Routes>
    </>
  )
}

export default App