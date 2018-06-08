const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('/build'));
app.listen(port);
app.get('/test', (req, res) => res.send('Heroku Demo!'));