import React from 'react'
import { useGetCryptoNewsQuery } from "../Services/CryptoNewsApi";
const News = () => {
  const {data, isFetching} = useGetCryptoNewsQuery({newsCategory:"Cryptocurrency", count:20})
  return (
    <div className='mt-10vh w-full flex jusitfy-start items-center flex-col pt-2 md:grid md:grid-cols-4 md:place-items-center md:p-4 md:gap-4 2xl:px-20'>
      {isFetching ? "Loading..." : data?.value.map((item, index) => (
        <div key={index} className='border-2 border-solid border-cyan-800 w-4/5 mb-2 rounded-md md:mb-0 md:w-full'>
          <div className='w-full h-15vh p-2 md:h-20vh'>
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