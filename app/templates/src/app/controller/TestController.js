class <%= name %>Controller {
  get<%= name %> (req, res) {
    console.log('GET request')
    res.json('URL WORKING!')
  }

  create<%= name %> (req, res) {
    console.log('POST request')
    res.json(req.body)
  }
}

module.exports = new <%= name %>Controller()
