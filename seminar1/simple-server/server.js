const express = require('express')

const app  = express()

app.get('/ping', async(req,res)=>{
    res.send('pong')
})

app.listen(8080)