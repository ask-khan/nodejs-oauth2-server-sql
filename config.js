const { Client } = require('pg')
const connectionString = 'postgresql://postgres:admin@localhost:5432/Sample'

const client = new Client({
    connectionString: connectionString,
});

client.connect();

module.exports = client;