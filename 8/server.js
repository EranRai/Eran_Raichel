//import and set up
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const app = express();
const mysql = require('./DB/DB')
const port = 2023;
app.use(express.static(path.join(__dirname,"static")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routing
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"));
    //res.send("hi 8");
}); 

app.get('/formHandler', (req,res)=>{
    var x = req.query;
    res.send(x);
})

app.get('/formHandler', (req,res)=>{
    //res.send(req.query);

    //validate info exists

    //pull info
    const NewSignUp = {
        email: req.query.UserEmail, 
        name: req.query.UserName
    }
    //run insert query
    const Q1 = "INSERT INTO SignUps SET ?";
    sql.query(Q1, NewSignUp, (err, mysqlres)=>{});
    if(err){
        console.log(err);
        return err;
    }
    res.send("thank you!");
    return;
})

//listen
app.listen(port, ()=> {
    console.log("server is running on port ", port); 
});