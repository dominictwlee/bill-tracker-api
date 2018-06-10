const initDatabase = require('../config/db');
const { ObjectID } = require('mongodb');

const testObjId = new ObjectID();

const bills = [
  {
    _id: testObjId,
    bill: 'electricity',
    cost: 40,
    paid: false,
  },
  {
    bill: 'water',
    cost: 30,
    paid: false,
  },
  {
    bill: 'internet',
    cost: 20,
    paid: false,
  },
];

const populateBills = done => {
  initDatabase().then(db => {
    db.collection('bills')
      .deleteMany({})
      .then(() => {
        db.collection('bills')
          .insertMany(bills)
          .then(() => done())
          .catch(err => console.log(err.stack));
      })
      .catch(err => console.log(err.stack));
  });
};

module.exports = { populateBills, testObjId };
