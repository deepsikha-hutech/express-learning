const express = require('express');
const app = express();

// app.get('/ab*cd', (req, res) => {
//     res.send('ab*cd')
//   });

// app.get('/ab+cd', (req, res) => {
//     res.send('ab+cd')
//   })

// app.get(/.*fly$/, (req, res) => {
//     res.send('/.*fly$/')
//   })
app.get(/a/, (req, res) => {
    res.send('/a/')
  })
  app.listen(3000, (err) => {
    console.log('Server is running on port 3000');
});