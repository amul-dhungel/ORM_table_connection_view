const Sequelize = require('sequelize')
const db = require('../config/database')

const posts = db.define('posts', {
    title: {
        type: Sequelize.STRING
    },

    description: {
        type: Sequelize.STRING
    }
})

module.exports = posts