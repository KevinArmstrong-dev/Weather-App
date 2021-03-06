const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


//This for the mapbox api
// const GeoApiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2V2aW4tYXJtc3Ryb25nIiwiYSI6ImNrcjVydHAxeDM4dnEyd3Q5eTlrbThhaGsifQ.xhXs7iKVrk8kIm9BsymZiA";

//you need to run npm app.js "city"
const city = process.argv[2];
if(city){
    //default empty object is given
    // because you can't destructure an undefined object in case of an error
    geocode(city, (error,{location, latitude, longitude} = {}) =>{
    
        //If somthing goes wrong, log the error then return.
        if(error){
            return console.log('Error', error);
        } 
        forecast(latitude, longitude, (error,response) =>{
            if(error){
                console.log('Error',error);
            }
            console.log('Data',response);
            console.log(location)
        })
    });
}else{
    console.log("Please Enter a Location!");
}



