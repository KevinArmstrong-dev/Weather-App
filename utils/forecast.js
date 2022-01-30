const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query=New%20York'

// request({
//     url: url,
//     json: true
// }, (error, response) => {

//     //This error will have data if the response is undefined
//     if (error) {
//         console.log("Unable to connect to weather Api")
//     }
//     //this will be called if the api response returned an error code
//     else if (response.body.error) {
//         console.log('Unable to obtain data');
//     } else {
//         //console.log(response.body.current);
//         console.log('It is currently ' + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip * 100 + "% chance of rain");
//     }
// })

// const forecast = (temp,temp1, callback) =>{
//     console.log('Hello cruel world');
//     callback();
// }

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query='+longitude+ ','+latitude;
    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to obtain data', undefined);
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                chance_of_rain: body.current,
            });
        }
    })
}

// forecast(12313,12313,()=>{console.log('BEEP BOOP')});

module.exports = forecast