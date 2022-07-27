import React, {useState, useEffect} from 'react'
import {Nav, Market, News, Coin} from "./components"
import {Routes, Route} from "react-router-dom"
import {IoIosArrowUp} from "react-icons/io"
import Aos from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  const [button, setButton] = useState(false)
  const [page, setPage] = useState(1)
  const [intro, setIntro] = useState(true)
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
  useEffect(() => {
    setTimeout(() => {
      setIntro(false)
    }, 2000)
  }, [])
  useEffect(() => {
    Aos.init()
  })
  return (
    <div className='relative min-h-screen bg-gray-900 text-gray-200 pt-[10vh]'>
      <Nav setPage={setPage}/>
      <Routes>
        <Route path="/" element={<Market page={page} setPage={setPage}/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
      </Routes>
      {button &&
        <button className='fixed bottom-[1em] right-1/2 bg-gray-200 w-[2em] h-[2em] grid place-items-center text-gray-900 rounded-full border-none outline-none cursor-pointer backdrop-blur text-lg translate-x-1/2' onClick={scrollUp}>
          <IoIosArrowUp/>
        </button>
      }
      {intro &&
        <div className='fixed md:hidden top-0 right-0 w-full h-screen bg-gray-900 text-gray-200 flex justify-center items-center flex-col md:flex-row text-4xl md:text-5xl'>
          <p data-aos='fade-in' data-aos-duration='1000' className='md:mr-1'>Crypto</p>
          <p data-aos='fade-in' data-aos-duration='1000' data-aos-delay='1000' >Link</p>
        </div>
      }
    </div>
  )
}

export default App