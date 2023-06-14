const mysql = require('mysql2');
const SQL = require('./db');

const createTable = (req,res) => {
    const Q1 ="createTable usersAA (id INT VARCHAR(255) , password VARHCAR(255));";
    SQL.query(Q1, (err, mysqlres)=>{
        if (err) throw err; 
        console.log("table created");
    });
};