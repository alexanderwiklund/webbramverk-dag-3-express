const express = require('express')
const router = express.Router()

router.get('/say-something', (request, response, next) => {
  response.status(200)
  response.send('Something!')
})

module.exports = router