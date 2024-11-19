const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  });

  app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
});

