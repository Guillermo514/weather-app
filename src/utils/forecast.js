const request = require('request')

const forecast = (latitud, longitud, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=933ae6eade8455e453acbf15a635abf0&query=' + latitud + ',' + longitud + '&units=m'

    request({ url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('No se pudo conectar con el Servidor de Clima', undefined)
        } else if (body.success === false){
            callback('No se pudo encontrar la ubicacion. Prueba otra busqueda. ', undefined)
        } else {
            // callback(undefined, {
            //     temperature: body.current.temperature,
            //     precip: body.current.precip,
            //     weather_descriptions: body.current.weather_descriptions
            // })
            callback(undefined, 'Hay una temperatura de ' + body.current.temperature + ' Cº con una precipitacion de ' + body.current.precip + ' y un dia ' + body.current.weather_descriptions + '. Y hay una humedad de ' + body.current.humidity + '%.')
            // callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast