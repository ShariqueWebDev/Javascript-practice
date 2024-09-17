const express = require('express');
const app = express();
const path = require("path");

// const staticPath = path.join(__dirname, "./public")
const templatePath = path.join(__dirname, "./template")
// console.log(staticPath);

// app.use(express.static(staticPath))

app.set('view engine', "hbs")

// change view directory name as template
app.set('views', templatePath)

app.get('/', (req, res)=>{
    res.render('index', {
        name:"Sharique",
        lastname:"Shaikh",
    })
})

app.get('/', (req, res)=>{
    res.end("<h1>Welcome to homepage</h1>");
})

app.listen(5000, ()=>{
    console.log("Server Listen Port on 5000");
});