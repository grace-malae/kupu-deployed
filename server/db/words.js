const connection = require('./connection')

function getWords (db = connection) {
  return db('word').select()
}

module.exports = {
  getWords
}
