class TestController {
  getTest (req, res) {
    console.log('GET request')
    res.json('URL WORKING!')
  }

  createTest (req, res) {
    console.log('POST request')
    res.json(req.body)
  }
}

module.exports = new TestController()
