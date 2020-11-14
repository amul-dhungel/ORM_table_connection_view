const express = require('express')
const router = express.Router()
const db = require('../config/database')
const User = require('../models/users')

router.get('/', (req, res) =>
    User.findAll()
        .then(users => {
            console.log(users);
            res.sendStatus(200)
        })
        .catch(err => console.log(err))

)

router.get('/add', (req, res) => {
    const data = {
        name: "Looking for a React developer",
        bio: "react, javascript, html, css",

    }

    let { name, bio } = data

    // Insert into database table

    User.create({
        name,
        bio
    })
        .then(user => res.redirect('/user'))
        .catch(err => console.log(err))
})

module.exports = router