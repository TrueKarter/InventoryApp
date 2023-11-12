import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase/config';
import { query, where, collection, getDocs } from 'firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { updateDoc, doc } from 'firebase/firestore';
import styles from './styles';

export default function AccountScreen({ navigation }) {
  const [fullName, setFullName] = useState('Guest');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userEmail = user.email;

      const q = query(collection(db, 'users'), where('email', '==', userEmail));

      getDocs(q)
        .then((querySnapshot) => {
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

  const handleImagePicker = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const userEmail = user.email;

          const q = query(
            collection(db, 'users'),
            where('email', '==', userEmail)
          );

          const querySnapshot = await getDocs(q);

          querySnapshot.forEach(async (doc) => {
            try {
              const userRef = doc.ref;
              await updateDoc(userRef, { profilePicture: result.uri });
              setProfilePicture(result.uri);
            } catch (error) {
              console.error('Error updating user document:', error);
            }
          });
        }

        setProfilePicture(result.uri);
      }
    } catch (error) {
      console.error('Error picking an image:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
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
