const fetch = require('node-fetch');

const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/;
const EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const GLOBAL_URL_REGEXP = new RegExp(URL_REGEXP.source, 'g');
const GLOBAL_EMAIL_REGEXP = new RegExp(EMAIL_REGEXP.source, 'g');

async function emailGrabber(url, depth = 1, currentDepth = 1, foundEmails = new Set(), foundUrls = new Set()){
  const emails = [];

  if(!URL_REGEXP.test(url)) {
    throw new Error(url +" URL is not valid!");
  }

  foundUrls.add(url);
  
  const fetchResult = await fetch(url);
  const content = await fetchResult.text();
  
  let result;
  
  while((result = GLOBAL_EMAIL_REGEXP.exec(content)) !== null){
    const email = result[0];
    emails.push({
      email,
      url,
      depth: currentDepth,
    });
    foundEmails.add(email);
  }
  
  if(currentDepth === depth) {
    return emails;
  }

  const urls = [];

  while((result = GLOBAL_URL_REGEXP.exec(content)) !== null){
    const url = result[0];
    if(!foundUrls.has(url)) {
      urls.push(url);
    };
  }

  for(const url of urls){
    emails.push(...await emailGrabber(url, depth, currentDepth + 1, foundEmails, foundUrls));
  }

  return emails;
}

module.exports = emailGrabber;