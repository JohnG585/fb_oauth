const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      // and logout LATER
      res.clearCookie('token')
      res.redirect('/')
    } else {
      let name = payload.name
      res.render('dashboard', { name })
    }
  })
})

module.exports = router
