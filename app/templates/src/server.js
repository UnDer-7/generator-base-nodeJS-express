const express = require('express')
const bodyParser = require('body-parser')

class App {
  constructor () {
    this.express = express()
    this.jsonParser = bodyParser.json()
    this.express.use(this.jsonParser)

    this.middleware()
    this.routes()
  }

  middleware () {
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
