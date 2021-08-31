const express = require('express');

const app = express();


//app.com /home
app.get('', (req,res) =>{

    res.send('<h1>Hello express!!</h1>');
})

//app.com/help
app.get('/help', (req,res) =>{
    res.send({
        name: 'Kevin',
        age: 101
    });
})

//app.com/about
app.get('/about', (req,res) =>{
    res.send({
        title: 'the tale of the angry mongoose',
        year: 2040,
        cause: 'Unknown'
    });
})

//weather route
app.get('/weather', (req,res) =>{
    res.send({
        forecast: 'Its 50 degrees in Philly',
        location: 'Philadelphia'
    });
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.');
});