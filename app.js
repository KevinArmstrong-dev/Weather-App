const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=eacbe4128b041bb2b9a09b8cbb0b5b7a&query=New%20York'

request({url: url,json:true},(error, response)=> {
    console.log(response.body.current);
})  