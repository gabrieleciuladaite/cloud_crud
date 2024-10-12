const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))


const mongoose = require('mongoose');

const {WEB_APP_NOTES_MONGODB_HOST,WEB_APP_NOTES_MONGODB_DATABASE} = process.env;
console.log(WEB_APP_NOTES_MONGODB_HOST)
console.log(WEB_APP_NOTES_MONGODB_DATABASE)
const MONGODB_CONNECTION = `mongodb://${WEB_APP_NOTES_MONGODB_HOST}/${WEB_APP_NOTES_MONGODB_DATABASE}`;
    
mongoose.connect(MONGODB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true
  })
  .then(db => console.log('DB Connection: true'))
  .catch(err => console.log(err))


app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname }, db);
})

app.listen(PORT)
    console.log(`Listening on port ${ PORT }`)

