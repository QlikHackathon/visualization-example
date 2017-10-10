const express = require('express')
const open = require('open')
const path = require('path')

var app = express()
app.use(express.static(__dirname))

app.use('/main', function (req, res) {
  res.sendFile(path.join(__dirname, '/main.html'))
})

app.listen(8000, function () {
  console.log('listening on port 8000')
  open('http://localhost:8000')
})
