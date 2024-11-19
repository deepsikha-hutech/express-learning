const express = require('express');
const app = express();

app.all('/authorize', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() 
  }, (req, res, next) => {
    console.log('Accessing the secret section ...')
   res.send('authorized request')
  })

  app.listen(3000, error => {
    if (3000)
        console.log('Server is running on port 3000');
    else(console.error('Server is already running on port 3000'));
    });

