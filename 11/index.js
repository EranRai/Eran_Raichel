const express = require('express');
const path = require ('path');
const app = express();
const bodyparser = require('body-parser');
const CreateDB = require ('./db/CreateDB_CRUD');
const port = 2023;

const SQL = require('./db/db');

app.use(express.static(path.join(__dirname,"static")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


//routing
app.get('/',(req,res)=> {
res.send("hi db")
});
//create table

app.get('/createTable'.createDB.createTable);

//set up listen
app.listen(port, ()=>{
    console.log("server is running on port" + port);
});