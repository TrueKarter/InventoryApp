import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase/config';
import { query, where, collection, getDocs } from 'firebase/firestore';
import {
  Foundation,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [fullName, setFullName] = useState('Guest');

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
          });
        })
        .catch((error) => {
          console.error('Error getting user document:', error);
        });
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome, {fullName}!</Text>
      </View>
      <View style={styles.gridContainer}>
        <View style={styles.rowContainer}>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="account" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Account</Text>
            <Text style={styles.buttonDesc}>
              View, Edit, and Manage Your Profile
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('DataEntry')}
          >
            <View
              style={[styles.iconContainer, { backgroundColor: '#118ab2' }]}
            >
              <FontAwesome name="pencil-square-o" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Data Entry</Text>
            <Text style={styles.buttonDesc}>Add an Item Into the Database</Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Removal')}
          >
            <View
              style={[styles.iconContainer, { backgroundColor: '#a1c181' }]}
            >
              <Foundation name="page-remove" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Removal</Text>
            <Text style={styles.buttonDesc}>
              Remove an Item From the Database
            </Text>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <Ionicons name="document-text" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Generate Report</Text>
            <Text style={styles.buttonDesc}>
              Generate a Report of the Database
            </Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="database-eye-outline"
                size={30}
                color="white"
              />
            </View>
            <Text style={styles.buttonLabel}>Display Items</Text>
            <Text style={styles.buttonDesc}>
              Display All Items Present in the Database
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <View style={styles.iconContainer}>
              <MaterialIcons name="logout" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Logout</Text>
            <Text style={styles.buttonDesc}>
              Logout and Return to Login Screen
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
