const express = require('express')
const app = express()
// const sql = require('mysql')
const port = 3006
 
// display the css 
app.use(express.static('public'))

app.get('/LOGINANDSIGNUPFORM',(req,res)=>{
  res.sendFile('index.html',{root:__dirname})
})

// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Example app listening on port ${3006}`)
  })
