const { client, q } = require('../services/db');

exports.handler = async function(event, context, callback) {
  const { queryStringParameters: { e } } = event;
  
  return client.query(q.Match(q.Index("email"), e), {
    data: {
      email: e
    }
  }).then((e)=>{
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Yes!',
        result: {},
      })
    });
  }).catch(()=>{
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'No!',
        result: {},
      })
    });
  });
}