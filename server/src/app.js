const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// logging into console
app.use(morgan('combined'))

// auto parsing json requests
app.use(bodyParser.json())

// cross origin requests are allowed to that app
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.listen(process.env.PORT || 8081)
