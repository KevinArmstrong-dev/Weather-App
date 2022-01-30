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



//key for open weather baedb6a0ffcd5790078b896948dba310

// const requ = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+ '&appid=baedb6a0ffcd5790078b896948dba310'

const forecast = (latitude, longitude, callback) => {
    // const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query='+longitude+ ','+latitude;
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+ '&appid=658767b0ae936b022f59a69f44868419'

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
                temperature: body.main.temp -273.15, //the unit is in kelvin 
                //  chance_of_rain: body.current.precip * 100 + "% chance of rain"
                description: body.weather[0].description,
            });
        }
    })
}


// forecast(51.5072,-0.1276,(response)=>{console.log('BEEP BOOP ',response)});

module.exports = forecast