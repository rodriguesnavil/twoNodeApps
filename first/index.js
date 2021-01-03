const express = require('express');
const app = express();


// Express route handlers

app.get('/', (req, res) => {
    res.send('First Node App');
  });

app.listen(5000, (err) => {
    console.log('Listening on port 5000');
  });