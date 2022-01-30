const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const { response } = require('express');
const { createSecretKey } = require('crypto');

console.log(path.join(__dirname, '../public'));


const app = express();

//get the port set by heroku
const port = process.env.PORT || 3000;

//Define express config for paths
const publicDirpath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


//This line for using the handlebars templating tool 
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


//customize the server
app.use(express.static(publicDirpath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: 'Kevin Rwigamba'
    });
})
//app.com/help
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Weather App",
        message: 'This is the help page for the wearher app',
        name: "Kevin A."
    });
})

//app.com/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: "Weather App",
        name: 'Kevin Rwigamba'
    });
})

//weather route
app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: ' You must provide an address'
        })
    }
    // let prevision = "";
    console.log(req.query.address);
    geocode(req.query.address, (error, {
        location,
        latitude,
        longitude
    } = {}) => {

        //If somthing goes wrong, log the error then return.
        if (error) {
            return res.send({error});
        }
        
       forecast(latitude, longitude, (error, response) => {
            if (error) {
                return res.send({error});
            }
            console.log('Data', response);
            console.log(location)
          
            res.send({
                forecast: response,
                location:req.query.address,
                address: location
            })
        })
        
    });

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        res.send({
            error: ' You must provide a search term'
        })
    } else {
        console.log(req.query);
        res.send({
            products: []
        })
    }

})

//Dealing with 404 This uses wild cards to match anyhting

app.get('/help/*', (req, res) => {
    res.render('404', {
        error: "help article not found",
        name: 'Kevin A. R'
    })
})

app.get("*", (req, res) => {
    res.render('404', {
        error: 'Page not found',
        name: 'Kevin A. R'
    })
});

app.listen(port, () => {
    console.log('Server is up on port '+port);
});