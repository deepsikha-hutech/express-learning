const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
 
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

  app.listen(2000, error => {
    if (2000)
        console.log('Server is running on port 2000');
    else(console.error('Server is already running on port 2000'));
    });