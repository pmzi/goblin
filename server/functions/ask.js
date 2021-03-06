const { client, q } = require('../services/db');

exports.handler = async function(event, context, callback) {
  const { queryStringParameters: { e } } = event;
  
  return client.query(q.Get(
    q.Match(q.Index('email_1'), e)
  )).then((e)=>{
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