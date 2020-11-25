const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/database')
const Users = require('./models/users')

const app = express()
const PORT = process.env.PORT || 5000

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

// db.sync({
//     logging: console.log,
//     force: true
// })
//     .then(() => {
//         console.log('Connection to database established successfully')
//     })

//     .catch(err => {
//         console.error('Unable to connect to database', err)
//     })

app.use('/user', require('./routes/user'))
app.listen(PORT, console.log(`Server is running on ${PORT}`))
