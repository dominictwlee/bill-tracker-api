const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const billRoutes = require('./routes/bills');
const initDatabase = require('./config/db');

//  Body parser setup for JSON and URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

initDatabase()
  .then(db => {
    billRoutes(app, db);

    app.use((err, req, res) => {
      console.log(err.stack);
      res.status(400).json({ error: err.message });
    });

    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch(err => {
    console.error('Failed connection to database');
    console.error(err);
  });

module.exports = app;
