import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const axios = require("axios");

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'd328c1fbfamsh47f08ec48559b01p19581fjsnefe5a54fcdbf',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin?${coinId}`)
        })
    })
})

export const {
     useGetCryptosQuery, useGetCryptoDetailsQuery,
 } = cryptoApi

// const options = {
//     method: 'GET',
//     url: ',
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
      
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });