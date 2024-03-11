const request = require('request')

const url2 = 'https://api.openweathermap.org/data/3.0/onecall?lat=51.507&lon=-0.12&appid=8577e30411acb9ecc027a7a3f79a66ef'

request({url: url2, json: true}, (error, response) => {
    console.log('It is current: ' + response.body.current.temp + ' degrees out. It feels like ' + response.body.current.feels_like + ' degress out.')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVyaWVtLWJvdXNzb3VmYSIsImEiOiJjbHRtcnZzd3AxZXQ0MnFuemEyN252YTNpIn0._sWECSNbYXdHBiQ--Uxmrg&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})