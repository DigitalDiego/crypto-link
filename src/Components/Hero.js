import React from 'react'
import {Link} from "react-router-dom"
const Hero = () => {
  return (
    <div className='w-full h-90vh flex justify-center items-center flex-col'>
        <h1 className='text-cyan-800 text-5xl font-bold md:text-8xl'>Dare To DeFi</h1>
        <p className='text-cyan-800 font-bold my-2 md:text-xl md:mb-4'>Crypto is here to stay</p>
        <Link to="/coins/page=1" className='w-100px h-32px grid place-items-center bg-cyan-800 rounded-md text-slate-100 font-bold md:w-150px'>Coins</Link>
    </div>
  )
}

export default Hero