const express = require('express')
const app = express()
const port = 3030

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/landing.html');
  })

  app.listen(port, () => {
    console.log(`Website running at port  ${port}`);
  })
