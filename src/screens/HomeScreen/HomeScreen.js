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
} from '@expo/vector-icons';

export default function HomeScreen() {
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
            <Text style={styles.buttonDesc}>View and Manage Your Profile</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <FontAwesome name="pencil-square-o" size={30} color="white" />
            </View>
            <Text>Data Entry</Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <Foundation name="page-remove" size={30} color="white" />
            </View>
            <Text>Removal</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <View style={styles.iconContainer}>
              <Ionicons name="document-text" size={30} color="white" />
            </View>
            <Text>Generate Report</Text>
          </Pressable>
        </View>
        <View style={styles.rowContainer}>
          <Pressable style={styles.button}></Pressable>
          <Pressable style={styles.button}></Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
  headerContainer: {
    borderColor: 'orange',
    borderWidth: 1,
    height: '20%',
    paddingHorizontal: 20,
  },
  gridContainer: {
    height: '75%',
    borderColor: 'blue',
    borderWidth: 1,
  },
  rowContainer: {
    borderColor: 'green',
    borderWidth: 1,
    height: '33.33%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '45%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonDesc: {
    color: 'gray',
  },
});
