export const key = "53858f6f17msh56f101adaa014e6p175338jsn02a3e984b0ee";
export const host = 'apidojo-yahoo-finance-v1.p.rapidapi.com';
// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";

// const KEY_URL = `&token=${key}`;
export const news = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
    params: {category: 'generalnews', region: 'US'},
    headers: {
      'x-rapidapi-key': '53858f6f17msh56f101adaa014e6p175338jsn02a3e984b0ee',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

export  const movers = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
    params: {region: 'US'},
    headers: {
      'x-rapidapi-key': '53858f6f17msh56f101adaa014e6p175338jsn02a3e984b0ee',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

export const single__news = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news',
  params: {category: 'TSLA', region: 'US'},
  headers: {
    'x-rapidapi-key': '53858f6f17msh56f101adaa014e6p175338jsn02a3e984b0ee',
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};
