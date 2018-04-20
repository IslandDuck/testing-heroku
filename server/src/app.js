const express = require('express')
const path = require('path')
// const serveStatic = require('serve-static')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config')

const PORT = config.PORT
const app = express()

// logging into console
app.use(morgan('combined'))
// auto parsing json requests
app.use(bodyParser.json())
// cross origin requests are allowed to that app
app.use(cors())

app.use(express.static(path.join(__dirname, '../../client/dist')))

require('./routes')(app)

// use sync({force: true}) to clean DB. DO NOT USE ON PRODUCTION OF COURSE
sequelize
  // .sync({force: true})
  .sync()
  .then(() => {
  // app.use(serveStatic(path.join(__dirname, 'client/src')))
  // app.use(serveStatic(`../../client/src`))
    app.listen(PORT, () => {
      console.log(`Server is up on ${PORT}`)
    })
  })
