
const mysql = require('mysql2');
const config = require ('./db.config');
const connection = mysql.createConnection({
    host: config.host,
    database: config.db,
    password: config.password,
    user: config.user
});

connection.connect(error => {
    if (error) throw error;
    console.log("connected to DB")
    //create table
});

module.exports = {connection};