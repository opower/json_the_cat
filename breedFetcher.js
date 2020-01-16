const request = require('request');
let args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, message, body) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    throw new Error('No cat exists!!');
  }
  if (error) {
    throw new Error('Request Error: ', error);
  }
  console.log(data[0].description);
});