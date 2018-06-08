const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME;

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
                required: ['bill', 'cost'],
                properties: {
                  bill: {
                    type: 'string',
                    description: 'Must be a string and is required',
                  },
                  cost: {
                    type: 'number',
                    description: 'Must be a number and is required',
                  },
                },
              },
            },
          });
        }
      });
    return db;
  });
