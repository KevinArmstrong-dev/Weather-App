const request = require('request');

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
module.exports =  geocode