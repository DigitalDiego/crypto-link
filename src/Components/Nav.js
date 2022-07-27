import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"
const Nav = ({setPage}) => {
  const links = [
      {name:"Market", link:"/"},
      {name:"News", link:"/news"}
  ]
  const [sidebar, setSidebar] = useState(false)
  const handleSidebar = () => {
      setSidebar(!sidebar)
  }
  const handleScroll = () => {
    if(sidebar){
        setSidebar(!sidebar)
        window.scrollTo(0, 0)
        setPage(1)
    } else {
        window.scrollTo(0, 0)
        setPage(1)
    }
  }
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='fixed top-0 right-0 w-full h-[10vh] flex justify-between items-center px-4 tracking-[.5px] bg-gray-900/90 backdrop-blur'>
        <Link className='text-4xl' to="/" onClick={handleScroll}>Crypto Link</Link>
        <nav className='hidden md:flex justify-center items-center'>
            {links.map((link, index) => (
                <Link className='ml-8 2xl:text-lg' to={link.link} key={index}>
                    {link.name}
                </Link>
            ))}
        </nav>
        <button className='text-lg border-none outline-none cursor-pointer md:hidden' onClick={handleSidebar}>
                {sidebar ? <FaTimes/> : <FaBars/>}
        </button>
        {sidebar &&
            <div data-aos='fade-left' className='fixed top-[10vh] right-0 w-full h-[90vh] bg-gray-900/90 backdrop-blur flex justify-start items-start flex-col px-4'>
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