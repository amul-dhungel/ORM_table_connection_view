const express = require('express')
const router = express.Router()
const db = require('../config/database')
const user = require('../models/users')

router.get('/users', (req, res) =>
    user.findAll()
        .then(gigs => {
            console.log(gigs);
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

    user.create({
        name,
        bio
    })
        .then(gig => res.redirect('/users'))
        .catch(err => console.log(err))
})

module.exports = router