const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=51.507&lon=-0.12&appid=8577e30411acb9ecc027a7a3f79a66ef'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log('It is current: ' + response.body.current.temp + ' degrees out. It feels like ' + response.body.current.feels_like + ' degress out.')
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVyaWVtLWJvdXNzb3VmYSIsImEiOiJjbHRtcnZzd3AxZXQ0MnFuemEyN252YTNpIn0._sWECSNbYXdHBiQ--Uxmrg&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })

// geocode('Boston', (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//     forecast(data.latitude, data.longitude, (error,data) => {
//         console.log('Error', error)
//         console.log('Data', data)
//     })
// })

const address = process.argv[2]

if(!address) {
    console.log('Please provide and address !')
}

geocode(address, (error, data) => {
    if(error) {
        return  console.log('Error', error)
    }
    forecast(data.latitude, data.longitude, (error,forecastData) => {
        if(error) {
            return  console.log('Error', error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

