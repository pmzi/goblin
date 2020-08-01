const send = require('gmail-send')({
  user: process.env.EMAIL_USERNAME,
  pass: process.env.EMAIL_PASSWORD,
  subject: 'Email from Goblin!',
});


exports.handler = function(event, context, callback) {
  const { emails, text } = JSON.parse(event.body);
  // We dont want to reach max RAM!
  const limitedEmails = emails.slice(0, 5)
  for(email of limitedEmails){
      send({
        to: email,
        text,
      });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Emails are queued and being sent!',
      result: {},
    })
  });
}