const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


//This for the mapbox api
// const GeoApiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2V2aW4tYXJtc3Ryb25nIiwiYSI6ImNrcjVydHAxeDM4dnEyd3Q5eTlrbThhaGsifQ.xhXs7iKVrk8kIm9BsymZiA";

geocode('Montreal', (error,data) =>{
    console.log('Error', error);
    console.log('Data', data);
});

forecast(-75.7088,44.1545, (error,response) =>{
    console.log('Error',error);
    console.log('Data',response);
})