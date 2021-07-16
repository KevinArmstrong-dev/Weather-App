const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query=New%20York'

//This for the mapbox api
const GeoApiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1Ijoia2V2aW4tYXJtc3Ryb25nIiwiYSI6ImNrcjVydHAxeDM4dnEyd3Q5eTlrbThhaGsifQ.xhXs7iKVrk8kIm9BsymZiA";


request({url: url,json:true},(error, response)=> {
    console.log(response.body.current);
    console.log('It is currently '+response.body.current.temperature+ " degrees out. There is a "+ response.body.current.precip *100 + "% chance of rain");
})  

request({url: GeoApiUrl,json:true},(error, response)=> {
    console.log("Geo Api says" + response[0]);
   // console.log('It is currently '+response+ " degrees out. There is a "+ response.body.current.precip *100 + "% chance of rain");
})  