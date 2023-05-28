import React, { useContext, useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import {db } from "../firebase"
import { UserAuth } from "../context/AuthContext"

const UserProfile = () => {
  const { user } = UserAuth();
  const [age, setAge] = useState(user.age || '');
  const [gender, setGender] = useState(user.gender || '');

  const handleSaveProfile = async () => {
    // Update the user profile data in Firebase Firestore
    try {
      const profileRef = doc(db, 'profiles', user.uid);
      await setDoc(profileRef, { age, gender }, { merge: true });
      console.log('Profile saved successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <button onClick={handleSaveProfile}>Save Profile</button>
    </div>
  );
};

export default UserProfile;
