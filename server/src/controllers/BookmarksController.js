const {Bookmark} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {songId, userId} = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured, trying to fetch the bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const {songId, userId} = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      console.log('BODY', req.body)
      if (bookmark) {
        return res.status(400).send({
          error: 'You already have set this boomark'
        })
      } else {
        const newBookmark = await Bookmark.create({
          SongId: songId,
          UserId: userId
        })
        res.send(newBookmark)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured, trying to create the bookmark'
      })
    }
  },
  async delete (req, res) {
    try {
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findById(bookmarkId)
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured, trying to delete the bookmark'
      })
    }
  }
}
