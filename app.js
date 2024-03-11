const request = require('request')

const url2 = 'https://api.openweathermap.org/data/3.0/onecall?lat=51.507&lon=-0.12&appid=8577e30411acb9ecc027a7a3f79a66ef'

request({url: url2, json: true}, (error, response) => {
    console.log('It is current: ' + response.body.current.temp + ' degrees out. It feels like ' + response.body.current.feels_like + ' degress out.')
})

