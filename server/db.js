const  { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'onlineStore-database',
    'user',
    'pass',
    {
        dialect: 'sqlite',
        host: './dev.sqlite'
    }
)


module.exports = sequelize