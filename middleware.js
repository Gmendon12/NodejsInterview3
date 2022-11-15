const express = require('express')
const app = express()

const middleware = (req,res,next) =>{
    console.log("Middleware for global");
    next();
}

app.use(middleware);

app.get('/page1', (req,res)=>{
    res.send("<h1> Page1 with middleware</h1>")
})

app.get('/page2', (req,res)=>{
    res.send("<h1> Page2 with middleware</h1>")
})

app.listen(9000, ()=>{
    console.log("app is running")
})