const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // email already exists.
      res.status(400).send({
        error: 'This email account is already in use'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      const errMsg = {
        error: 'The login information was incorrect'
      }
      if (!user) {
        return res.status(403).send(errMsg)
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        console.log(password, user.password)
        return res.status(403).send(errMsg)
      }

      const userJSON = user.toJSON()
      return res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      // email already exists.
      console.log(err)
      res.status(500).send({
        error: 'An error has occured, trying to log in'
      })
    }
  }
}
