const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile('cloud_crud/index.html');
})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)