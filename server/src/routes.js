const AuthenticationController = require('./controllers/AuthenticationController')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const HistoriesController = require('./controllers/HistoriesController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/api/login',
    AuthenticationController.login)
  app.get('/api/songs',
    SongsController.index)
  app.get('/api/songs/:songId',
    SongsController.show)
  app.put('/api/songs/:songId',
    SongsController.put)
  app.post('/api/songs',
    SongsController.post)

  app.get('/api/bookmarks',
    isAuthenticated,
    BookmarksController.index)
  app.post('/api/bookmarks',
    isAuthenticated,
    BookmarksController.post)
  app.delete('/api/bookmarks/:bookmarkId',
    isAuthenticated,
    BookmarksController.delete)

  app.get('/api/histories',
    isAuthenticated,
    HistoriesController.index)
  app.post('/api/histories',
    isAuthenticated,
    HistoriesController.post)
}
