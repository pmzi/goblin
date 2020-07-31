const send = require('gmail-send')({
  user: process.env.EMAIL_USERNAME,
  pass: process.env.EMAIL_PASSWORD,
  subject: 'Email from Goblin!',
});


exports.handler = function(event, context, callback) {
  const { emails, text } = JSON.parse(event.body);

  for(email of emails){
      send({
        to: email,
        text,
      });
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Emails are queued and being sent!',
      result: {},
    })
  });
}