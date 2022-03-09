import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': process.env.REACT_APP_SDK,
    'x-rapidapi-host': process.env.REACT_APP_HOST,
    'x-rapidapi-key': process.env.REACT_APP_KEY
}
const baseUrl = process.env.REACT_APP_URL
const createRequest = (url) => ({url, headers:cryptoNewsApiHeaders})
export const CryptoNewsApi = createApi({
    reducerPath:"CryptoNews",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews:builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetCryptoNewsQuery} = CryptoNewsApi