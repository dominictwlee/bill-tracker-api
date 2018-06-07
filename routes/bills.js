const express = require('express');

module.exports = (app, db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    db.collection('bills')
      .insertOne(req.body)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });

  app.use('/api/bills', router);
  return app;
};
