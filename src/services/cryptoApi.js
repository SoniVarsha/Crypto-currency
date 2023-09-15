import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'af60af673dmsha95b9b93ea7b828p1a8953jsna485d0f7e78d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl =  'https://coinranking1.p.rapidapi.com';
const createRequest = (url)=>({url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/?timePeriod=${timePeriod}`)
        }),
        getExchanges: builder.query({
            query:()=>createRequest(`/exchanges`)
        }),
    })
})

 export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery, useGetExchangesQuery} = cryptoApi
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'af60af673dmsha95b9b93ea7b828p1a8953jsna485d0f7e78d',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };