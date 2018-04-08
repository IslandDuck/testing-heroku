const express = require('express')
// const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// const serveStatic = require('serve-static')

const PORT = process.env.PORT || 8081
const app = express()

// logging into console
app.use(morgan('combined'))

// auto parsing json requests
app.use(bodyParser.json())

// cross origin requests are allowed to that app
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

// app.use(serveStatic(path.join(__dirname, 'client/src')))
// app.use(serveStatic(`../../client/src`))
app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`)
})
