const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {})
})

router.post('/', function(req, res, next) {
  let { name, email, userID } = req.body

  let token = jwt.sign({ name, email }, process.env.JWT_KEY)
  res.cookie('token', token, { httpOnly: true })

  knex('users')
  .where('email', email)
  .then((user) => {
    if (user[0]) {
      res.sendStatus(200)
    } else {
      knex('users')
      .insert({ name, email, userID })
      .then(insertedUser => {
        res.sendStatus(200)
      })
    }
  })
})

module.exports = router
