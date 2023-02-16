const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
require('dotenv').config()
const app = express()

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App Web',
        name: 'Guillermo LP'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        body: 'Guillermo LP'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Needs help? Shrek too!',
        name: 'Guillermo LP'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Invalid Address'
        })
    }
    
    geocode(req.query.address, (error, {latitud, longitud, location} = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitud, longitud, (error, forecastData) => {
            if (error) {
                return res.send({error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Guillermo',
        errorMessage: 'Articulo de Ayuda No Econtrado. :('
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Guillermo',
        errorMessage: 'Pagina No Econtrada. :('
    })
})

app.listen(process.env.PORT||3000, () => {
    console.log('Server is up on port 3000.')
})