exports.handler = async function(event, context, callback) {
  console.log(event)
  

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Got you!',
      result: {},
    })
  });
}