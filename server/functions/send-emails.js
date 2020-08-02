const send = require('gmail-send')({
  user: process.env.EMAIL_USERNAME,
  pass: process.env.EMAIL_PASSWORD,
  subject: 'Email from Goblin!',
});


exports.handler = async function(event, context, callback) {
  const { emails, text } = JSON.parse(event.body);
  // We dont want to reach max RAM!
  const limitedEmails = emails.slice(0, 5)
  for(email of limitedEmails){
      await send({
        to: email,
        html: `${text}<img src="https://ikiu-goblin.netlify.app/.netlify/functions/track?e=${email}" />`,
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