const request = require('request')

const url2 = 'https://api.openweathermap.org/data/3.0/onecall?lat=51.507&lon=-0.12&appid=8577e30411acb9ecc027a7a3f79a66ef'
request({url: url2}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})

