import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const SendSMS = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [textMessage, setTextMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new message document in Firebase Firestore
    try {
      const messagesRef = collection(db, 'messages');
      await addDoc(messagesRef, { phoneNumber, text: textMessage });
      console.log('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // Clear the form fields
    setPhoneNumber('');
    setTextMessage('');
  };

  return (
    <div>
      <h1>Send SMS</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendSMS;
