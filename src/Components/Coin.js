import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import {BsArrowUp, BsArrowDown} from "react-icons/bs"
const Coin = () => {
  const [coin, setCoin] = useState([])
  const {id} = useParams()
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => {
            setCoin(res.data)
        }).catch(error => {console.log(error)})
  }, [])
  return (
    <div className='px-4 flex justify-start items-center flex-col'>
        <div className='w-full h-[8vh] flex justify-center items-center'>
            <img className='w-8 h-8 mr-1' src={coin?.image?.small} alt={coin.name} />
            <p className='text-2xl'>{coin?.name}</p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>Symbol</p>
            <p>{coin?.symbol}</p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>Price</p>
            <p>${coin?.market_data?.current_price?.usd < 0 ? coin?.market_data?.current_price.usd : coin?.market_data?.current_price?.usd.toLocaleString()}</p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>% Change</p>
            <p className={coin?.market_data?.price_change_percentage_24h < 0 ? 'flex justify-center items-center text-[crimson]' : 'flex justify-center items-center text-[lime]'}>
                <BsArrowUp className={coin?.market_data?.price_change_percentage_24h < 0 ? "hidden" : "inline mr-1"}/>
                <BsArrowDown className={coin?.market_data?.price_change_percentage_24h < 0 ? "inline mr-1" : "hidden"}/>
                {coin?.market_data?.price_change_percentage_24h.toFixed(2)}%
            </p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>$ Change</p>
            <p className={coin?.market_data?.price_change_percentage_24h < 0 ? 'flex justify-center items-center text-[crimson]' : 'flex justify-center items-center text-[lime]'}>
                <BsArrowUp className={coin?.market_data?.price_change_percentage_24h < 0 ? "hidden" : "inline mr-1"}/>
                <BsArrowDown className={coin?.market_data?.price_change_percentage_24h < 0 ? "inline mr-1" : "hidden"}/>
                ${coin?.market_data?.price_change_percentage_24h_in_currency?.usd.toLocaleString()}
            </p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>Market Cap</p>
            <p>${coin?.market_data?.market_cap?.usd.toLocaleString()}</p>
        </div>
        <div className='w-full h-[8vh] flex justify-between items-center border-b-solid border-slate-100 border-b-[1px] text-xl md:w-3/5'>
            <p>Volume</p>
            <p>${coin?.market_data?.total_volume?.usd.toLocaleString()}</p>
        </div>
        {!coin?.links?.homepage[0] ? null :
            <div className='w-full h-[8vh] grid place-items-center text-xl md:w-3/5'>
                <a className='bg-gray-200 text-gray-900 px-4 py-[1px] md:px-8' href={coin?.links?.homepage[0]} rel='noreferrer' target='_blank'>Website</a>
            </div>
        }
    </div>
  )
}

export default Coin