const client = require('../services/db');

exports.handler = async function(event, context, callback) {
  const { queryStringParameters: { e } } = event;
  
  q(q.Get(q.Collection(`amniat/emails/${e}`))).then((e)=>{
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