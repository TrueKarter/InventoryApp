/* Import necessary React and React Native components */
import React, { useState } from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles'; // Import styles specific to LoginScreen
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase authentication functions

/* Define the LoginScreen component */
export default function LoginScreen({ navigation }) {
  /* State variables to hold email and password input values */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* Function to navigate to the Registration screen */
  const onSingUpPress = () => {
    navigation.navigate('Registration');
  };

  /* Function to handle login attempt */
  const handleLogin = async () => {
    try {
      const auth = getAuth(); // Get the authentication instance
      await signInWithEmailAndPassword(auth, email, password); // Sign in the user with provided email and password

      /* Clear input fields */
      setEmail('');
      setPassword('');

      navigation.navigate('Home'); // Navigate to the Home screen
    } catch (error) {
      /* Clear input fields */
      setEmail('');
      setPassword('');

      alert('Login failed. Please check your credentials.'); // Display login failure message
    }
  };

  /* Render the LoginScreen UI */
  return (
    <ImageBackground
      source={require('../../../assets/images/LoginScreen-bg.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          placeholderTextColor="white"
          style={styles.input}
          textAlign="center"
          value={email}
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          style={styles.input}
          textAlign="center"
          value={password}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.button, { marginTop: 5, marginBottom: 20 }]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: 'white' }]}>
            Don't have an account?{' '}
          </Text>
          <Text onPress={onSingUpPress} style={[styles.text, { color: 'red' }]}>
            Sign up
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
