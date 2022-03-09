import React from 'react'
import {Link} from "react-router-dom"
const SideMenu = ({nav, handleNav, handleScroll}) => {
  const data = [
    {name:"Home", link:"/", function:handleScroll},
    {name:"Coins", link:"/coins/page=1"},
    {name:"News", link:"/news"},
  ]
  return (
    <div style={{transition:"all .4s linear"}} className={nav ? 'fixed top-10vh right-0 bg-cyanBlur w-full h-90vh backdrop-blur-md flex justify-center items-center flex-col translate-x-0' : 'fixed top-10vh right-0 bg-cyanBlur w-full h-90vh backdrop-blur-md flex justify-center items-center flex-col translate-x-100%'} onClick={handleNav}>
        {data.map((link, index) => (
            <Link className='w-full h-80px grid place-items-center text-2xl text-slate-100 font-bold' to={link.link} key={index} onClick={link.function}>
                {link.name}
            </Link>
        ))}
    </div>
  )
}

export default SideMenu