import React, {useState, useEffect} from 'react'
import axios from "axios"
import {AiOutlineSearch} from "react-icons/ai"
import {Link} from "react-router-dom"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import {BsArrowUp, BsArrowDown} from "react-icons/bs"
const PageOne = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
  const  [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
      .then(res => {
        setCoins(res.data)
      }).catch(error => console.log(error))
  }, [page])
  const searchedCoin = coins.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ))
  const handleBackArrow = () => {
    if(page != 0){
      setPage(page => page - 1)
    }
  }
  const handleForwardArrow = () => {
    if(page != 3){
      setPage(page => page + 1)
    }
  }
  return (
    <div className='tracking-[.5px]'>
      <div className='px-4 w-full h-[8vh] flex justify-center items-center border-b-solid border-b-gray-800 border-b-[1px] md:justify-between md:h-[10vh]'>
        <p className='hidden text-3xl md:inline'>Market</p>
        <div className='flex justify-center items-center'>
          {page == 1 ? <div className="w-5 h-5"></div> :
            <button className='w-5 h-5 grid place-items-center border-none outline-none cursor-pointer' onClick={handleBackArrow}>
              <IoIosArrowBack className='text-lg'/>
            </button>
          }
          <div className='flex justify-center items-center bg-gray-800 rounded-full px-2 py-1 mx-4'>
            <AiOutlineSearch className='mr-1'/>
            <input className='bg-transparent placeholder:text-gray-200 border-none outline-none' type="text" placeholder="Search coin..." onChange={event => setSearch(event.target.value)} value={search}/>
          </div>
          {page == 3 ? <div className='w-5 h-5'></div> :
            <button className='w-5 h-5 grid place-items-center border-none outline-none cursor-pointer' onClick={handleForwardArrow}>
              <IoIosArrowForward className='text-lg'/>
            </button>
          }
        </div>
      </div>
      <div className='px-4 w-full h-[8vh] flex justify-between items-center border-b-solid border-b-gray-800 border-b-[1px]'>
        <p className='flex justify-start items-center md:w-[30%]'>Coin</p>
        <p className='hidden nav-width md:grid place-items-center'>Market Cap</p>
        <p className='hidden nav-width md:grid place-items-center'>Volume</p>
        <p className='hidden nav-width md:grid place-items-center'>% Change</p>
        <p className='flex justify-end items-center nav-width'>Price</p>
      </div>
      {searchedCoin.map((coin, index) => (
        <Link className={index % 2 === 0 ? 'w-full h-[8vh] flex justify-between items-center px-4 md:h-[10vh]' : 'w-full h-[8vh] bg-gray-800 flex justify-between items-center px-4 md:h-[10vh]'} to={`/coin/${coin.id}`} key={index}>
          <div className='flex justify-start items-center md:w-[30%]'>
            <img className='w-5 h-5 mr-2' src={coin.image} alt={coin.name} />
            <p>{coin.name}</p>
          </div>
          <p className='hidden nav-width md:flex justify-center items-center'>${coin.market_cap.toLocaleString()}</p>
          <p className='hidden nav-width md:flex justify-center items-center'>${coin.total_volume.toLocaleString()}</p>
          <p className={coin.price_change_percentage_24h < 0 ? 'hidden nav-width md:flex justify-center items-center text-[crimson]' : 'hidden nav-width md:flex justify-center items-center text-[lime]'}>
            <BsArrowUp className={coin.price_change_percentage_24h < 0 ? ' hidden mr-1' : 'inline mr-1'}/>
            <BsArrowDown className={coin.price_change_percentage_24h < 0 ? 'inline mr-1' : 'hidden mr-1'}/>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className='flex justify-end items-center nav-width'>${coin.current_price < 0 ? coin.current_price : coin.current_price.toLocaleString()}</p>
        </Link>
      ))}
    </div>
  )
}

export default PageOne