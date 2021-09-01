const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname,'../public'));


const app = express();

const publicDirpath = path.join(__dirname,'../public');

//customize the server
app.use(express.static(publicDirpath));

//app.com/help

//app.com/about

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