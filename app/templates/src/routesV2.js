const express = require('express')
const routes = express.Router()

const rootUrl = '/api'

routes.get(`${rootUrl}/tst`, (req, res) => {
  console.log('GET request')
  res.json('URL WORKING!')
})

routes.post(`${rootUrl}/tst`, (req, res) => {
  console.log('POST request')
  res.json(req.body)
})

module.exports = routes
