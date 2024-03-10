const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>This is version:2 !!</p>
    <p>This is version:3 !!</p>
    <p>This is version:4 !!</p>
    <p>This is version:5 !!</p>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
