const express = require('express');
const app = express();


// Express route handlers

app.get('/', (req, res) => {
    res.send('Second Node App');
  });

app.listen(5001, (err) => {
    console.log('Listening on port 5001');
  });