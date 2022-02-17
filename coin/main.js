console.log('[JS LOADED]')

const API_URL = 'https://api.coinbase.com/v2/';

fetch(API_URL)
  .then(response => response.json())
  .then(data => console.log(data));

