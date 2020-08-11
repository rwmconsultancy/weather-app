const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=77513038049c95c435fc51ad460d3d81&query=' + longitude + ',' + latitude + '&units=m'
    // console.log(url)
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature is ' + body.current.temperature + ' and it feels like ' + body.current.feelslike + ' degrees. The humidity is currently ' + body.current.humidity + '%.' )
        }

    })
}

module.exports = forecast
