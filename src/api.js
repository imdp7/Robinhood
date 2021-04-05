export const key = "75be8188fbmshf14c7f140b725d7p13b6e3jsne892fe687552";
export const host = 'apidojo-yahoo-finance-v1.p.rapidapi.com';
// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";

// const KEY_URL = `&token=${key}`;
export const news = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
    params: {category: 'generalnews', region: 'US'},
    headers: {
      'x-rapidapi-key': `${key}`,
      'x-rapidapi-host': `${host}`
    }
  };

export  const movers = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
    params: {region: 'US'},
    headers: {
      'x-rapidapi-key': `${key}`,
      'x-rapidapi-host': `${host}`
    }
  };

export const single__news = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news',
  params: {category: 'TSLA', region: 'US'},
  headers: {
    'x-rapidapi-key': `${key}`,
    'x-rapidapi-host': `${host}`
  }
};
