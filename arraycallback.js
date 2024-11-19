const express = require('express');
const app = express();

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/', [cb0, cb1, cb2])

  app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
});
