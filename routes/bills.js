const express = require('express');

module.exports = (app, db) => {
  const router = express.Router();

  router.post('/', (req, res) => {
    db.collection('bills')
      .insertOne(req.body)
      .then(result => res.status(200).json(result))
      .catch(err => res.status(400).json(err.message));
  });

  app.use('/api/bills', router);
  return app;
};
