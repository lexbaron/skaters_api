const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const database = new Sequelize({
    dialect: 'postgres',
    database: config.env.DB,
    host: config.env.DB_HOST,
    username: config.env.DB_NAME,
    port: config.env.DB_PORT,
    password: config.env.DB_PASSWORD,
    dialectOptions:config.env.NODE_ENV === 'production' ? {
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    } : {}
});

module.exports = {database, DataTypes};