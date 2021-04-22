const connection = require('./connection')

function getWords (db = connection) {
  return db('words').select()
}

module.exports = {
  getWords
}
