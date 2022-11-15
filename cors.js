// npm i cors

const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/adduser', (req,res)=>{
    console.log(req.query);
    res.send("success")
})

app.put('/editUser/:salary', (req,res)=>{
    console.log(req.params)
    res.send("success")
})

app.listen(8001)
