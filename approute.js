const express = require('express');
const app = express();

app.route('/')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

  app.listen(3000, (error) => {
    console.log('Server is running on port 3000');
  });