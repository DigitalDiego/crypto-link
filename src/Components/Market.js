import React, {useState, useEffect} from 'react'
import axios from "axios"
import {AiOutlineSearch} from "react-icons/ai"
import {Link} from "react-router-dom"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"
import {BsArrowUp, BsArrowDown} from "react-icons/bs"
const PageOne = ({page, setPage}) => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")
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
    if(page !== 0){
      setPage(page => page - 1)
    }
  }
  const handleForwardArrow = () => {
    if(page !== 3){
      setPage(page => page + 1)
    }
  }
  return (
    <div className='tracking-[.5px]'>
      <div className='bg-gray-900 px-4 w-full h-[8vh] flex justify-center items-center border-b-solid border-b-gray-800 border-b-[1px] md:justify-between md:h-[10vh]'>
        <p className='hidden text-3xl md:inline'>Market</p>
        <div className='flex justify-center items-center'>
          {page === 1 ? <div className="w-5 h-5"></div> :
            <button className='w-5 h-5 grid place-items-center border-none outline-none cursor-pointer' onClick={handleBackArrow}>
              <IoIosArrowBack className='text-lg'/>
            </button>
          }
          <div className='flex justify-center items-center bg-gray-800 rounded-full px-2 py-1 mx-4'>
            <AiOutlineSearch className='mr-1'/>
            <input className='bg-transparent placeholder:text-gray-200 border-none outline-none tracking-[.5px]' type="text" placeholder="Search coin..." onChange={event => setSearch(event.target.value)} value={search}/>
          </div>
          {page === 3 ? <div className='w-5 h-5'></div> :
            <button className='w-5 h-5 grid place-items-center border-none outline-none cursor-pointer' onClick={handleForwardArrow}>
              <IoIosArrowForward className='text-lg'/>
            </button>
          }
        </div>
      </div>
      <div className='bg-gray-900 px-4 w-full h-[8vh] flex justify-between items-center border-b-solid border-b-gray-800 border-b-[1px]'>
        <div className='flex justify-start items-center md:w-[30%]'>
          <p className='inline after:content[""] after:block after:w-full after:h-[1px] after:bg-gray-200'>Coin</p>
        </div>
        <div className='hidden nav-width md:grid place-items-center'>
          <p className='inline after:content[""] after:block after:w-full after:h-[1px] after:bg-gray-200'>Market Cap</p>
        </div>
        <div className='hidden nav-width md:grid place-items-center'>
          <p className='inline after:content[""] after:block after:w-full after:h-[1px] after:bg-gray-200'>Volume</p>
        </div>
        <div className='hidden nav-width md:grid place-items-center'>
          <p className='inline after:content[""] after:block after:w-full after:h-[1px] after:bg-gray-200'>% Change</p>
        </div>
        <div className='flex justify-end items-center nav-width'>
          <p className='inline after:content[""] after:block after:w-full after:h-[1px] after:bg-gray-200'>Price</p>
        </div>
      </div>
      {searchedCoin.map((coin, index) => (
        <Link className={`w-full h-[8vh] flex justify-between items-center px-4 md:h-[10vh] 2xl:h-[8vh] ${index % 2 === 0 ? "bg-gray-800" : "bg-transparent"}`} to={`/coin/${coin.id}`} key={index}>
          <div className='flex justify-start items-center md:w-[30%]'>
            <img className='w-5 h-5 mr-2' src={coin?.image} alt={coin?.name} />
            <p>{coin?.name}</p>
          </div>
          <p className='hidden nav-width md:flex justify-center items-center'>${coin?.market_cap.toLocaleString()}</p>
          <p className='hidden nav-width md:flex justify-center items-center'>${coin?.total_volume.toLocaleString()}</p>
          <p className={`hidden nav-width md:flex justify-center items-center ${coin?.price_change_percentage_24h < 0 ? "text-[crimson]" : "text-[lime]"}`}>
            <BsArrowUp className={coin?.price_change_percentage_24h < 0 ? 'hidden mr-1' : 'inline mr-1'}/>
            <BsArrowDown className={coin?.price_change_percentage_24h < 0 ? 'inline mr-1' : 'hidden mr-1'}/>
            {coin?.price_change_percentage_24h?.toFixed(2)}%
          </p>
          <p className={`flex justify-end items-center nav-width md:text-gray-200 ${coin?.price_change_percentage_24h < 0 ? "text-[crimson]" : "text-[lime]"}`}>${coin?.current_price < 1000 ? coin?.current_price : coin?.current_price.toLocaleString()}</p>
        </Link>
      ))}
    </div>
  )
}

export default PageOne