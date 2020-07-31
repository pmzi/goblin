const emailGrabber = require('../utilities/emailGrabber');

exports.handler = function(event, context, callback) {
  const { url, depth } = JSON.parse(event.body);

  emailGrabber(url, depth).then((emails)=>{
    let i = 0;
    const emailsWithID = emails.map(email => ({
      id: ++i,
      ...email,
    }));

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success!',
        result: {
          emails: emailsWithID
        },
      })
    });
  }).catch(({ message })=>{
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message,
        result: {}
      })
    });
  })
}