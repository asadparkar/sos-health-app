// functions/index.js

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio');

admin.initializeApp();
const db = admin.firestore();

const accountSid = 'AC5cfda1b85df7da0d2a93e26623537f2a';
const authToken = 'c7ab8578ffc90a19384cc15d7fd1d787';
const client = twilio(accountSid, authToken);

exports.sendSMS = functions.firestore
  .document('messages/{messageId}')
  .onCreate(async (snapshot, context) => {
    const message = snapshot.data();

    const twilioPhoneNumber = '+13158649964';
    const recipientPhoneNumber = message.phoneNumber;
    const textMessage = message.text;

    try {
      await client.messages.create({
        body: textMessage,
        from: twilioPhoneNumber,
        to: recipientPhoneNumber,
      });
      console.log('SMS sent successfully!');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  });
