/* Import necessary Firebase modules */
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';

/* Firebase configuration object containing API keys and project details */
const firebaseConfig = {
  apiKey: 'AIzaSyD5LfoqlZndA4D8idimCExxMlsLi7oIiiA',
  authDomain: 'inventory-app-f483b.firebaseapp.com',
  projectId: 'inventory-app-f483b',
  storageBucket: 'inventory-app-f483b.appspot.com',
  messagingSenderId: '1019258370890',
  appId: '1:1019258370890:web:d4862d20220049598d9fb3',
};

const app = initializeApp(firebaseConfig); // Initialize the Firebase app with the provided configuration

/* Initialize Firebase authentication and set persistence using React Native AsyncStorage */
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app); // Initialize Firebase Firestore database

export { app, auth, db }; // Export the initialized Firebase app, authentication, and database for use in other parts of the application
