const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Okay');
});

app.listen(3000, error => {
    if (!error)
        console.log('Server is running on port 3000');
    else(console.error('Server is already running on port 3000'));
    });
