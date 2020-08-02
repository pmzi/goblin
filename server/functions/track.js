const { client, q } = require('../services/db');

exports.handler = async function(event, context, callback) {
  const { queryStringParameters: { e } } = event;
  return client.query(q.Create(q.Ref("classes/emails"), {data: {
    email: e,
  }})).then(()=>{
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Got you!',
        result: {},
      })
    });
  }).catch(({ message })=>{
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message,
        result: {},
      })
    });
  });
}