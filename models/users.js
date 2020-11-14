const Sequelize = require('sequelize')
const db = require('../config/database')
const post = require('./post')

const Users = db.define('Users', {
    name: {
        type: Sequelize.STRING
    },

    bio: {
        type: Sequelize.STRING
    }
})

Users.hasOne(post)

module.exports = Users