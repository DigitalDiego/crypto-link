import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import HTMLReactParser from "html-react-parser"
const Coin = () => {
  const {id} = useParams()
  const [coin, setCoin] = useState([])
  useEffect(() => {
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => {
            setCoin(res.data)
        }).catch(error => console.log(error))
  }, [id])
  return (
    <div className='mt-10vh flex justify-center items-center flex-col'>
    {/*Top Div*/}
      <div className='w-full flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center h-10vh md:h-20vh'>
          <img src={coin?.image?.small} alt={coin.name} className='w-40px h-40px mr-2 md:w-50px md:h-50px'/>
          <p className='text-2xl font-bold md:text-4xl'>{coin.name}</p>
        </div>
        <div className='grid place-items-center'>
          <p className='text-lg font-bold text-center w-100px h-28px bg-cyan-800 text-slate-100 rounded-md'>{coin?.symbol}</p>
        </div>
      </div>
      {/*Price*/}
      <div className='w-11/12 md:w-4/5 flex justify-between items-center h-100px border-b-2 border-solid border-cyan-800'>
        <div>
          <p className='font-bold md:text-2xl'>Price:</p>
        </div>
        <div>
          <p className='font-bold md:text-2xl'>${coin?.market_data?.current_price.usd?.toLocaleString()}</p>
        </div>
      </div>
      {/*Price Change %*/}
      <div className='w-11/12 md:w-4/5 flex justify-between items-center h-100px border-b-2 border-solid border-cyan-800'>
        <div>
          <p className='font-bold md:text-2xl'>Price Change %:</p>
        </div>
        <div>
            {coin?.market_data?.price_change_percentage_24h < 0 ? <p className='font-bold md:text-2xl bg-red-800 w-100px h28px text-center rounded-md text-slate-100'>{coin?.market_data?.price_change_percentage_24h.toFixed(2)}%</p> : <p className='font-bold md:text-2xl bg-green-800 w-100px h28px text-center rounded-md text-slate-100'>{coin?.market_data?.price_change_percentage_24h.toFixed(2)}%</p>}
        </div>
      </div>
      {/*Price Change $*/}
      <div className='w-11/12 md:w-4/5 flex justify-between items-center h-100px border-b-2 border-solid border-cyan-800'>
        <div>
          <p className='font-bold md:text-2xl'>Price Change $:</p>
        </div>
        <div>
            <p className='font-bold md:text-2xl'>{coin?.market_data?.price_change_24h_in_currency?.usd.toLocaleString()}</p>
        </div>
      </div>
      {/*Market Cap*/}
      <div className='w-11/12 md:w-4/5 flex justify-between items-center h-100px border-b-2 border-solid border-cyan-800'>
        <div>
          <p className='font-bold md:text-2xl'>Market Cap:</p>
        </div>
        <div>
          <p className='font-bold md:text-2xl'>${coin?.market_data?.market_cap?.usd.toLocaleString()}</p>
        </div>
      </div>
      {/*Volume*/}
      <div className='w-11/12 md:w-4/5 flex justify-between items-center h-100px border-b-2 border-solid border-cyan-800'>
        <div>
          <p className='font-bold md:text-2xl'>Volume:</p>
        </div>
        <div>
          <p className='font-bold md:text-2xl'>${coin?.market_data?.total_volume?.usd.toLocaleString()}</p>
        </div>
      </div>
      {/*Link*/}
      {coin?.links?.homepage[0] === null ? null : <div className='w-11/12 h-100px grid place-items-center'>
        <a className='font-bold text-slate-100 bg-cyan-800 w-150px h-32px rounded-md grid place-items-center' href={coin?.links?.homepage} target="_blank" rel="noreferrer">
          Website
        </a>  
      </div>}
      {/*Description*/}
      <div className='w-11/12 md:w-4/5 mb-2 md:mb-4'>
        <p className='text-sm text-center font-bold md:text-base'>{HTMLReactParser(String(coin?.description?.en))}</p>
      </div>
    </div>
  )
}

export default Coin