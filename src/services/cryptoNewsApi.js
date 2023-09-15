import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders = {
        'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'af60af673dmsha95b9b93ea7b828p1a8953jsna485d0f7e78d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl =  'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url)=>({url, headers:cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            // query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
            query:({newsCategory, count})=>createRequest("/news")
        })
    })
})

 export const { useGetCryptoNewsQuery, } = cryptoNewsApi

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {
//     textFormat: 'Raw',
//     safeSearch: 'Off'
//   },
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Key': 'af60af673dmsha95b9b93ea7b828p1a8953jsna485d0f7e78d',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

