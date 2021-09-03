const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname,'../public'));
const viewsPath = paths.join(__dirname, '../templates');


const app = express();

const publicDirpath = path.join(__dirname,'../public');

//This line for using the handlebars templating tool 
app.set('view engine','hbs');
app.set('views', viewsPath);

//customize the server
app.use(express.static(publicDirpath));

app.get('',(req,res) =>{
    res.render('index',{
        title:"Weather App",
        name: 'Kevin Rwigamba'
    });
})
//app.com/help
app.get('/help',(req,res) =>{
    res.render('help',{
        title:"Weather App",
        message: 'This is the help page for the wearher app'
    });
})

//app.com/about
app.get('/about',(req,res) =>{
    res.render('about',{
        title:"Weather App",
        name: 'Kevin Rwigamba'
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