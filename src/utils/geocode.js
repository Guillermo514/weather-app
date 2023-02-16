const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiMjNzZGZlciIsImEiOiJjbGR3NmYxdzYwNGd5M29vamt1dmkyaTNoIn0.ArOswA4XJ06zy3kJvAUGJQ'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('No se pudo conectar con el Servidor Local', undefined)
        } else if (body.features.length === 0){
            callback('No se pudo encontrar la ubicacion. Prueba otra busqueda. ', undefined)
        } else {
            callback(undefined, {
                latitud: body.features[0].center[1],
                longitud: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode