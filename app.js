const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))


app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
  res.sendFile('script.js', { root: __dirname });
  res.sendFile('style.css', { root: __dirname });

})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)