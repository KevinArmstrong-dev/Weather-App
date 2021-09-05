const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(path.join(__dirname,'../public'));


const app = express();

//Define express config for paths
const publicDirpath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//This line for using the handlebars templating tool 
app.set('view engine','hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


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
        message: 'This is the help page for the wearher app',
        name: "Kevin A."
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

//Dealing with 404 This uses wild cards to match anyhting

app.get('/help/*', (req,res) => {
    res.render('404',{
        error: "help article not found",
        name:'Kevin A. R'
    })    
})

app.get("*",(req,res) => {
    res.render('404',{
        error: 'Page not found',
        name: 'Kevin A. R'
    })
});

app.listen(3000,()=>{
    console.log('Server is up on port 3000.');
});