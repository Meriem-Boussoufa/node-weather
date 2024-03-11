const https = require('https')

const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=-12.01&lon=75.2589&appid=8577e30411acb9ecc027a7a3f79a66ef'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        //console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })
})

response.on('error', (error) => {
    console.log('An error', error)
})


request.end()