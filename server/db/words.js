const connection = require('./connection')

function getWords (db = connection) {
  return db('words')
    .then(result => {
      return result
    })
}

module.exports = {
  getWords
}
