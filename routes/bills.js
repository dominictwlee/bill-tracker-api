const express = require('express');

const { handleCreate, handleRead, handleUpdate, handleDelete } = require('../controllers/bills.controller');

module.exports = (app, db) => {
  const router = express.Router();

  router.post('/', handleCreate.bind(null, db, 'bills'));

  router.get('/', handleRead.bind(null, db, 'bills', {}));

  router.patch('/:id', handleUpdate.bind(null, db, 'bills'));

  router.delete('/:id', handleDelete.bind(null, db, 'bills'));

  app.use('/api/bills', router);
  return app;
};
