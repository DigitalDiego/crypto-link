import React from 'react'
import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";
const News = () => {
  const {data, isFetching} = useGetCryptoNewsQuery({newsCategory:"Cryptocurrency", count:20})
  return (
    <div className='mt-10vh w-full grid place-items-center grid-cols-1 pb-1em md:grid-cols-4 md:p-1em md:gap-1em 2xl:grid-cols-5'>
      {isFetching ? "Loading..." : data?.value.map((item, index) => (
        <div key={index} className='border-2 border-solid border-cyan-800 w-4/5 rounded-md md:mb-0 md:w-full md:h-full'>
          <div className='w-full p-2'>
            <p className='text-lg font-bold md:text-base 2xl:text-lg'>{item.name}</p>
          </div>
          <div className='w-full h-32px flex justify-end items-center pr-2 pb-2'>
            <a className='w-100px h-28px bg-cyan-800 text-center text-slate-100 rounded-md font-bold' href={item.url} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News