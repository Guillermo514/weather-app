// const forecast = (latitud, longitud, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=933ae6eade8455e453acbf15a635abf0&query=' + latitud + ',' + longitud + '&units=m'

//     request({ url: url, json: true}, (error, {body}) => {
//         if (error) {
//             callback('No se pudo conectar con el Servidor de Clima', undefined)
//         } else if (body.success === false){
//             callback('No se pudo encontrar la ubicacion. Prueba otra busqueda. ', undefined)
//         } else {
//             callback(undefined, {
//                 temperature: body.current.temperature,
//                 precip: body.current.precip,
//                 weather_descriptions: body.current.weather_descriptions
//             })
//         }
//     })
// }

// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         console.log(data.error)
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'NodeJS'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Cargando...'
    messageTwo.textContent = ''

    //console.log('http://localhost:3000/weather?address=' + location)

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error

            } else {
                //messageOne.textContent = JSON.stringify(data.location)
                //messageTwo.textContent = JSON.stringify(data.forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})