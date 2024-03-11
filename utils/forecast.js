const request = require('request')

const forecast =(latitude, longtitude, callback) => {

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=" + latitude + "&lon=" + longtitude + "&appid=8577e30411acb9ecc027a7a3f79a66ef"
    request({ url : url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service !', undefined)
        }else if(response.body.error) {
            callback('Unable to find location !', undefined)
        }else {
            callback(undefined, response.body.current.weather[0].main + ' It is current: ' + response.body.current.temp + ' degrees out. It feels like ' + response.body.current.feels_like + ' degress out.')
        }
    })
}

module.exports = forecast