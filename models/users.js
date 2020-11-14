const Sequelize = require('sequelize')
const db = require('../config/database')
const post = require('./models/posts')

const User = db.define('Users', {
    name: {
        type: Sequelize.STRING
    },

    bio: {
        type: Sequelize.STRING
    }
})

User.hasOne(post)

module.exports = User