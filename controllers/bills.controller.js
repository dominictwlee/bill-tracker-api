const handleCreate = (db, colName, req, res, next) => {
  req.body.paid = false;
  db.collection(colName)
    .insertOne(req.body)
    .then(result => res.status(200).json({ status: result, item: result.ops }))
    .catch(next);
};

const handleRead = (db, colName, req, res, next) => {
  const queryString = req.query;
  db.collection(colName)
    .find(queryString)
    .toArray()
    .then(result => res.status(200).json(result))
    .catch(next);
};

const handleUpdate = (db, colName, req, res, next) => {
  const { id } = req.params;
  if (!req.body) {
    next();
  }
  db.collection(colName)
    .findOneAndUpdate({ _id: id }, { $set: req.body })
    .then(result => res.status(200).json(result))
    .catch(next);
};

const handleDelete = (db, colName, req, res, next) => {
  const { id } = req.params;
  db.collection(colName)
    .findOneAndDelete({ _id: id })
    .then(result => res.status(200).json(result))
    .catch(next);
};

module.exports = {
  handleCreate,
  handleRead,
  handleUpdate,
  handleDelete,
};
