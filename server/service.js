'use strict'

const express = require('express')
const service = express()
const request = require('superagent')
// const moment = require('moment')

// http://api.apixu.com/v1/current.json?key=d638b27a7fc046d5bf4204924192601&q=Paris

service.get('/service/:location', (req, res, next) => {
/*   request.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + req.params.location + '&key=YOUR_API_KEY',
    (err, response) => {
      if (err) {
        console.log(err)
        return res.sendStatus(500)
      }

      const location = response.body.results[0].geometry.location
      const timestamp = +moment().format('X')

      request.get('https://maps.googleapis.com/maps/api/timezone/json?location=' + location.lat + ',' + location.lng + '&timestamp=' + timestamp + '&key=YOUR_TIMEZONE_API_KEY',
        (err, response) => {
          if (err) {
            console.log(err)
            return res.sendStatus(500)
          }

          const result = response.body
          const timeString = moment.unix(timestamp + result.dstOffset + result.rawOffset).utc().format('dddd, MMMM Do YYYY, h:mm:ss a')
          res.json({ result: timeString })
        })
    }) */

  console.log('Address: http://api.apixu.com/v1/current.json?key=d638b27a7fc046d5bf4204924192601&q=' + req.params.location)
  request.get('http://api.apixu.com/v1/current.json?key=d638b27a7fc046d5bf4204924192601&q=' + req.params.location,
    (err, response) => {
      if (err) {
        console.log('got error')
        console.log(err)
        return res.sendStatus(500)
      }

      console.log('got response')
      return res.json({ result: `${response.body.location.localtime}` })
    })

  // return res.json({ result: req.params.location })
})

module.exports = service
