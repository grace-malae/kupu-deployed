const express = require('express')

const db = require('../db/words')

const router = express.Router()

router.get('/', (req, res) => {
  db.getWords()
    .then(results => {
      res.json({ words: results.map(word => word.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
