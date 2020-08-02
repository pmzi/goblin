
const faunadb = require('faunadb');

exports.client = new faunadb.Client({
  secret: process.env.DB_SECRET
})

exports.q = faunadb.query;