import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"
const Nav = () => {
  const links = [
      {name:"Market", link:"/"},
      {name:"Watchlist", link:"/watchlist"},
      {name:"News", link:"/news"}
  ]
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = () => {
      setSidebar(!sidebar)
  }
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className=' relative w-full h-[10vh] flex justify-between items-center px-4 tracking-[.5px]'>
        <Link className='text-4xl' to="/">Crypto Link</Link>
        <nav className='hidden md:flex justify-center items-center'>
            {links.map((link, index) => (
                <Link className='ml-8' to={link.link} key={index}>
                    {link.name}
                </Link>
            ))}
        </nav>
        <button className='text-lg border-none outline-none cursor-pointer md:hidden' onClick={handleSidebar}>
                {sidebar ? <FaTimes/> : <FaBars/>}
        </button>
        {sidebar &&
            <div data-aos='fade-left' className='fixed top-[10vh] right-0 w-full h-[90vh] bg-gray-900/90 backdrop-blur-sm flex justify-start items-start flex-col px-4'>
                {links.map((link, index) => (
                    <Link className='text-lg border-b-solid border-b-gray-200 border-b-[1px] w-full h-[8vh] flex justify-start items-center' to={link.link} key={index} onClick={handleSidebar}>
                        {link.name}
                    </Link>
                ))}
            </div>
        }
    </div>
  )
}

export default Nav