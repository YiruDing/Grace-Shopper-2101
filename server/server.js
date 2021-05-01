const express = require('express')
const app = express()

const api = require('./api/')
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', '/public')))
//Routes Beginning With /Api
app.use('/api', api)

//Main Route
app.get('/', (req, res, next) => {
    const html = path.join(__dirname, '..', '/client/index.html')
    res.sendFile(html)
})
module.exports = app
