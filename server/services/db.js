
const faunadb = require('faunadb');

exports.client = new faunadb.Client({
  secret: "fnADyQcHl_ACBsLgCNxvH0vND_g-4e_PzYCsiubs"
})

exports.q = faunadb.query;