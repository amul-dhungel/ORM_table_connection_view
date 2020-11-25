const Sequelize = require('sequelize')
const db = require('../config/database')
const posts = require('./post')

const Users = db.define('Users', {
    uuid: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultVlue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },

    bio: {
        type: Sequelize.STRING
    }
})

Users.hasOne(posts)

module.exports = Users