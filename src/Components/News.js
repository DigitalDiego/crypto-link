import React, {useState, useEffect} from 'react'
import axios from "axios"
const News = () => {
  const [news, setNews] = useState([])
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_URL,
    headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_HOST,
      'X-RapidAPI-Key': process.env.REACT_APP_KEY
    }
  };
  useEffect(() => {
    axios.request(options)
      .then(res => {
        setNews(res.data)
      }).catch(error => {console.log(error)})
  }, [])
  const topNews = news.slice(0, 20)
  return (
    <div className='px-4'>
      <div className='w-full h-[8vh] flex justify-center items-center text-2xl tracking-[.5px] md:h-[10vh] md:justify-start md:text-3xl'>
        <p>News</p>
      </div>
      <div className='grid grid-cols-1 place-items-center gap-4 tracking-[.5px] pb-2 md:grid-cols-4'>
        {topNews.map((block, index) => (
          <div className='w-full h-[10em] bg-gray-800 p-2 flex justify-between items-center flex-col' key={index}>
            <p>{block?.title}</p>
            <div className='w-full flex justify-end items-center'>
              <a className='bg-gray-200 text-gray-900 px-4' href={block?.url} rel='noreferrer' target="_blank">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News