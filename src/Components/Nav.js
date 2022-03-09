import React from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
const Nav = ({nav, handleNav, handleScroll}) => {
  const data = [
      {name:"Home", link:"/", function:handleScroll},
      {name:"Coins", link:"/coins/page=1"},
      {name:"News", link:"/news"},
  ]
  return (
    <div className='w-full h-10vh flex justify-between items-center px-4 bg-cyan-800 fixed top-0 right-0 z-10 2xl:px-20'>
        <Link to="/" onClick={handleScroll}>
            <h1 className='text-slate-100 text-4xl font-bold 2xl:text-5xl'>Crypto Link</h1>
        </Link>
        <nav className='hidden md:flex md:justify-center md:items-center'>
            {data.map((link, index) => (
                <Link to={link.link} key={index} onClick={link.function}>
                    <p className='text-slate-100 font-bold ml-8 text-lg'>{link.name}</p>
                </Link>
            ))}
        </nav>
        <button className='w-28px h-28px grid place-items-center relative rounded-md bg-slate-100 md:hidden' onClick={handleNav}>
            <FaBars style={{transition:"all .4s linear"}} className={nav ? 'absolute text-cyan-800 opacity-0 text-lg' : 'absolute text-cyan-800 opacity-100 text-lg'}/>
            <FaTimes style={{transition:"all .4s linear"}} className={nav ? 'absolute text-cyan-800 opacity-100 text-lg' : 'absolute text-cyan-800 opacity-0 text-lg'}/>
        </button>
    </div>
  )
}

export default Nav