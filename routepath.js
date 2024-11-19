const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('root')
  });
  app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
});