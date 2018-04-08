const Joi = require('joi')
const passwordRegExp = `^[a-zA-Z0-9]{8,32}$`

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp(passwordRegExp)
      )
    }
    const {error} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `
              You must provide a valid email address. You typed: ${error.details[0].context.value}
            `
          })
          break
        case 'password':
          res.status(400).send({
            error: `
              You must provide a valid password, in the following pattern ${passwordRegExp}
              <br>
              1. It must contain only the following characters: lower case, upper case or numeric
              <br>
              2. It must be at least 8 characters and maximum of 32 characters length
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration info'
          })
          break
      }
    } else {
      // proceed further in case of success
      next()
    }
  }
}
