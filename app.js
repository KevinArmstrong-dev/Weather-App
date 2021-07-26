const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query=New%20York'

//This for the mapbox api
// const GeoApiUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2V2aW4tYXJtc3Ryb25nIiwiYSI6ImNrcjVydHAxeDM4dnEyd3Q5eTlrbThhaGsifQ.xhXs7iKVrk8kIm9BsymZiA";


// request({url: url,json:true},(error, response)=> {
    
//     //This error will have data if the response is undefined
//     if(error){
//         console.log("Unable to connect to weather Api")
//     }
//     //this will be called if the api response returned an error code
//     else if(response.body.error){
//         console.log('Unable to obtain data');
//     }
//     else{
//         //console.log(response.body.current);
//         console.log('It is currently '+response.body.current.temperature+ " degrees out. There is a "+ response.body.current.precip *100 + "% chance of rain");
//     }
// })  

// request({url: GeoApiUrl,json:true},(error, response)=> {
//     if(error){
//         console.log("Unable to connect to the weather Api");
//     }else if(!response.body.features){
//         console.log('Unable to obtain data');
//     }
//      else{
//         const coordinates = response.body.features[2].geometry.coordinates;
//     console.log(" The coordinates are  "+ coordinates[0] + " and "+coordinates[1]);

       
//     }   
// })  

// this fucntion encodeURIComponent will decode the url even for places that have special characters
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoia2V2aW4tYXJtc3Ryb25nIiwiYSI6ImNrcjVydHAxeDM4dnEyd3Q5eTlrbThhaGsifQ.xhXs7iKVrk8kIm9BsymZiA";

    request ({url:url,json:true},(error,response) => {
        if(error){
            callback('Unable to connect to Loaction services',undefined);
        }else if(response.body.features.length === 0 ){
            callback('Unable to find location, try another search',undefined)
        } else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })

}

geocode('Montreal', (error,data) =>{
    console.log('Error', error);
    console.log('Data', data);
});