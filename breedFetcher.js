const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, message, body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null)
    }

    return callback(error, data[0].description);
  });
  
};
module.exports = { fetchBreedDescription} ;