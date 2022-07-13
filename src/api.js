export const key = process.env.REACT_APP_API_KEY;
export const host = 'yh-finance.p.rapidapi.com';
// const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";

// const KEY_URL = `&token=${key}`;
export const news = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/list',
    params: {category: 'generalnews', region: 'US'},
    headers: {
      'X-RapidAPI-Key': '2e483bfda5mshdb59dafdf59818fp1f6fb5jsndce66f23746a',
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

export  const movers = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers',
    params: {region: 'US'},
    headers: {
      'X-RapidAPI-Key': `${key}`,
      'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

export const single__news = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news',
  params: {category: 'TSLA', region: 'US'},
  headers: {
    'rapidapi-key': `${key}`,
    'x-rapidapi-host': `${host}`
  }
};

export const financial = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-balance-sheet',
  params:{region: 'US'},
  headers: {
    'rapidapi-key': `${key}`,
    'x-rapidapi-host': `${host}` 
  }
}
export const earnings = {

method: 'GET',
  url: 'https://www.alphavantage.co/query?function=EARNINGS&apikey=YDER30K38MP32WSW&symbol=',
};