import React, {useState, useEffect} from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"
const CoinsTwo = () => {
    const [search, setSearch] = useState("")
    const [coins, setCoins] = useState([])
  useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=false")
        .then(res => {
            setCoins(res.data)
        }).catch(error => console.log(error))
  }, [])
  const searchedCoin = coins.filter(coin => (
      coin.name.toLowerCase().includes(search.toLowerCase())
  ))
  return (
    <div className='w-full mt-10vh'>
        <div className='w-full h-10vh grid place-items-center'>
            <input type="text" placeholder="Search Coin" className='w-200px h-28px md:h-32px md:w-280px md:px-4 bg-cyan-100 px-2 rounded-md text-stone-900 placeholder:text-stone-900 font-bold border-none outline-none' onChange={event => setSearch(event.target.value)} value={search}/>
        </div>
        <div className='w-full h-5vh flex justify-center items-center'>
            <Link to="/coins/page=1" className='w-32px h-32px grid place-items-center'>
                <IoIosArrowBack className='text-cyan-800 text-lg'/>
            </Link>
            <p className='text-lg px-2 font-bold text-cyan-800'>2</p>
            <div className='w-32px h-32px'></div>
        </div>
        <div className='w-full pt-2 flex justify-start items-center flex-col px-4'>
            {coins.length === 0 ? "Loading..." : searchedCoin.map((coin, index) => (
                <Link to={`/coin/${coin.id}`} key={index} className='hover:bg-cyan-100 w-full h-100px md:w-1000px mb-2 md:mb-4'>
                    <div className='w-full overflow-hidden border-2 border-solid border-cyan-800 rounded-md h-100px flex justify-center items-center md:w-1000px'>
                        <div className='w-1/2 h-full flex justify-start items-center pl-2 md:w-1/5'>
                            <img src={coin.image} alt={coin.name} className='w-40px h-40px mr-2'/>
                            <p className='font-bold text-lg'>{coin.name}</p>
                        </div>
                        <div className='hidden w-1/5 md:flex flex-col justify-center items-center'>
                            <div>
                                <p className='font-bold inline after:content[""] after:w-full after:h-1px after:bg-stone-800 after:block'>Market Cap</p>
                            </div>
                            <div>
                                <p className='font-bold'>${coin.market_cap.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className='hidden w-1/5 md:flex justify-center items-center flex-col'>
                            <div>
                                <p className='font-bold inline after:content[""] after:w-full after:h-1px after:bg-stone-800 after:block'>Volume</p>
                            </div>
                            <div>
                                <p className='font-bold'>${coin.total_volume.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className='hidden w-1/5 md:grid place-items-center'>
                            {coin.price_change_percentage_24h < 0 ? <p className='font-bold bg-red-800 w-100px h28px text-center rounded-md text-slate-100'>{coin.price_change_percentage_24h.toFixed(2)}%</p> : <p className='font-bold bg-green-800 w-100px h28px text-center rounded-md text-slate-100'>{coin.price_change_percentage_24h.toFixed(2)}%</p>}
                        </div>
                        <div className='w-1/2 h-full flex justify-end items-center pr-2 md:w-1/5'>
                            <p className='font-bold text-lg'>${coin.current_price.toLocaleString()}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CoinsTwo