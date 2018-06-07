const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'billtracker';

module.exports = () => MongoClient.connect(url).then(client => client.db(dbName));
