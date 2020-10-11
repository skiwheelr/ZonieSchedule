const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation();

app.handle('schedule', conv => {
  let tcity = conv.session.params.tcity;
  conv.add("Your meeting in " + tcity + " at {$session.params.ttime}");
  
  
  
  
  
  
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
