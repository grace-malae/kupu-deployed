const express = require('express')
const path = require('path')

const wordRoutes = require('./routes/words')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/words', wordRoutes)

module.exports = server
