import emailGrabber from '../utilities/emailGrabber';

exports.handler = function(event, context, callback) {
  const { url, depth } = JSON.parse(event.body);

  emailGrabber(url, depth).then((emails)=>{
    let i = 0;
    const emailsWithID = emails.map(email => ({
      id: ++i,
      ...email,
    }));

    callback({
      status: 200,
      body: JSON.stringify({
        message: 'Success!',
        result: {
          emailsWithID
        },
      })
    });
  }).catch(({ message })=>{
    callback({
      status: 200,
      body: JSON.stringify({
        message,
        result: {}
      })
    });
  })
}