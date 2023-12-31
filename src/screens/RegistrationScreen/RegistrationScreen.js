import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';

/* Fuctional component for the Registration Screen */
export default function RegistrationScreen({ navigation }) {
  /* State variables for user input */
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /* Navigate to the login screen when the "Log in" link is pressed */
  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  /* Handle the registration process when the "CREATE ACCOUNT" button is pressed */
  const onRegisterPress = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const auth = getAuth();

      /* Create a user with email and password */
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      /* Add user data to the 'users' collection in Firestore */
      const userDocRef = await addDoc(collection(db, 'users'), {
        fullName: fullName,
        email: email,
        password: password,
      });

      alert('Account made successfully');
      navigation.navigate('Login');
    } catch (error) {
      const errorMessage = error.message;
      alert(errorMessage);
    }
  };

  /* JSX structure for the Registration Screen */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          onChangeText={(fullName) => setFullName(fullName)}
          style={styles.input}
          value={fullName}
        />
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          style={styles.input}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(password) => setPassword(password)}
          secureTextEntry
          style={styles.input}
          value={password}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
        />
      </View>
      <TouchableOpacity onPress={() => onRegisterPress()} style={styles.button}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already got an account?{' '}
        <Text onPress={onFooterLinkPress} style={styles.footerLink}>
          Log in
        </Text>
      </Text>
    </SafeAreaView>
  );
}
