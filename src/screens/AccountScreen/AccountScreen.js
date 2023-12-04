/* Import necessary modules from React and React Native */
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase/config';
import { query, where, collection, getDocs } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { updateDoc, doc } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'; // Import styles for the AccountScreen component

/* Functional component for the Account Screen */
export default function AccountScreen({ navigation }) {
  /* State variables to store user information */
  const [fullName, setFullName] = useState('Guest');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  /* useEffect hook to fetch user information when the component mounts */
  useEffect(() => {
    const auth = getAuth(); // Get the current authenticated user
    const user = auth.currentUser;

    /* If user is authenticated, fetch user data from Firestore */
    if (user) {
      const userEmail = user.email;

      const q = query(collection(db, 'users'), where('email', '==', userEmail)); // Query to get user document based on email

      getDocs(q)
        .then((querySnapshot) => {
          /* Set state variables with user data */
          querySnapshot.forEach((doc) => {
            setFullName(doc.data().fullName);
            setEmail(doc.data().email);
            setProfilePicture(doc.data().profilePicture);
          });
        })
        .catch((error) => {
          console.error('Error getting user document:', error);
        });
    }
  }, []);

  /* Function to handle image picker and update user profile picture */
  const handleImagePicker = async () => {
    try {
      /* Launch the image picker */
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      /* If an image is selected and not cancelled */
      if (!result.cancelled) {
        const auth = getAuth();
        const user = auth.currentUser;

        /* If user is authenticated, update profile picture in Firestore */
        if (user) {
          const userEmail = user.email;

          /* Query to get user document based on email */
          const q = query(
            collection(db, 'users'),
            where('email', '==', userEmail)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach(async (doc) => {
            try {
              const userRef = doc.ref;
              await updateDoc(userRef, { profilePicture: result.uri }); // Update user document with the new profile picture URI
              setProfilePicture(result.uri);
            } catch (error) {
              console.error('Error updating user document:', error);
            }
          });
        }

        setProfilePicture(result.uri); // Set profile picture in component state
      }
    } catch (error) {
      console.error('Error picking an image:', error);
    }
  };

  /* JSX structure for the Account Screen component */
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          style={styles.headerBackButton}
          name="arrow-back"
          size={26}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
        <Text style={styles.title}>Account Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        <Pressable style={styles.changeImageButton} onPress={handleImagePicker}>
          <Text style={styles.changeImageButtonText}>Change Picture</Text>
        </Pressable>
      </View>
      <View style={styles.accountDetailsContainer}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Full Name:</Text>
          <Text style={styles.detailText}>{fullName}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailText}>{email}</Text>
        </View>
      </View>
      <Pressable
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
}
