const {Bookmark, Song} = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmarks = await Bookmark.findAll({
        where,
        include: [
          {
            model: Song
          }
        ]
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
        ))
      res.send(bookmarks)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured, trying to fetch the bookmarks'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const {songId} = req.body
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
      const userId = req.user.id
      const {bookmarkId} = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      if (!bookmark) {
        res.status(403).send({
          error: 'you do not have an access to that bookmark'
        })
      }
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
