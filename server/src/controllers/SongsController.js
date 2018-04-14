const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An err has occured, trying to fetch the songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      console.log('we are here')
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An err has occured, trying to create the song'
      })
    }
  }
}
