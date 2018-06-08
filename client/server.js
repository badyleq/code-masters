const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/build'));
app.get('/test', (req, res) => res.send('Heroku Demo!'));
app.listen(port);