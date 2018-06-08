const express = require('express');

module.exports = (app, db) => {
  const router = express.Router();

  router.post('/', (req, res, next) => {
    req.body.paid = false;
    db.collection('bills')
      .insertOne(req.body)
      .then(result => res.status(200).json({ status: result, item: result.ops }))
      .catch(next);
  });

  router.get('/', (req, res, next) => {
    db.collection('bills')
      .find({})
      .toArray()
      .then(result => res.status(200).json(result))
      .catch(next);
  });

  router.patch('/:id', (req, res, next) => {
    const { id } = req.params;
    if (!req.body) {
      next();
    }
    db.collection('bills')
      .findOneAndUpdate({ _id: id }, { $set: req.body })
      .then(result => res.status(200).json(result))
      .catch(next);
  });

  app.use('/api/bills', router);
  return app;
};
