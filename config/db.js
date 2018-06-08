const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = process.env.NODE_ENV === 'test' ? 'billtrackertest' : 'billtracker';

module.exports = () =>
  MongoClient.connect(url).then(client => {
    const db = client.db(dbName);
    db.listCollections({ name: 'bills' })
      .toArray()
      .then(list => {
        if (list.length === 0) {
          db.createCollection('bills', {
            validator: {
              $jsonSchema: {
                bsonType: 'object',
                properties: {
                  bill: {
                    type: 'string',
                    description: 'Must be a string',
                  },
                  cost: {
                    type: 'number',
                    description: 'Must be a number',
                  },
                },
              },
            },
          });
        }
      });
    return db;
  });
