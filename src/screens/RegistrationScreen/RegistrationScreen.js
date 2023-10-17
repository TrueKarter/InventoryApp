import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //TODO: Handle user creation success here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // TODO: Handle the error here
    }
  };

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

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
    padding: 15,
    marginTop: 50,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fafafc',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '90%',
  },
  footerText: {
    color: '#2e2e2d',
    fontSize: 14,
    marginTop: 10,
  },
  footerLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fafafc',
    borderRadius: 12,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '100%',
  },
  label: {
    color: '#b7b6bd',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
});
