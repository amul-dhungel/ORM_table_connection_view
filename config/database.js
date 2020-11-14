const { Model } = require('sequelize')
const Sequelize = require('sequelize')

const db = new Sequelize('codegig', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = db