const express = require('express')
const routes = express.Router()

const TestController = require('./app/controllers/TestController')

const rootUrl = '/api'

routes.get(`${rootUrl}/tst`, TestController.getTest)
routes.post(`${rootUrl}/tst`, TestController.createTest)

module.exports = routes
