import React, { createContext, useState } from 'react';
import axios from "axios";

export const key = "bv2ipb748v6ubfule9mg";

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";

const KEY_URL = `&token=${key}`;

export const StockContext = createContext(null);


export function StockData(stock) {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
}
