const server = require('./server')

const port = process.env.PORT || 3000

console.log(`Running on port: ${port}`)
server.listen(port)
