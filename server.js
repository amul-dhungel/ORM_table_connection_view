const express = require('express')
const db = require('./config/database')

const app = express()
const PORT = 5000

db.authenticate()
    .then(() => {
        console.log('Connect has been established successfully')
    })
    .catch(err => {
        console.error('Unable to connect to the database', err)
    })

app.get('/', (req, res) => {
    res.send('This is the server main page')
})

app.listen(PORT, console.log(`Server is running on ${PORT}`))
