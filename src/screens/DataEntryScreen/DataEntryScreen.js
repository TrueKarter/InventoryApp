import React, { useState } from 'react';
import { addItemToDatabase } from '../../firebase/DatabaseFunctions';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function DataEntryScreen({ navigation }) {
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [zone, setZone] = useState('');
  const [aisle, setAisle] = useState('');
  const [shelf, setShelf] = useState('');

  const handleAddItem = () => {
    const quantityNumber = parseFloat(quantity);

    addItemToDatabase(upc, quantityNumber, zone, aisle, shelf);

    setUpc('');
    setQuantity('');
    setZone('');
    setAisle('');
    setShelf('');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="arrow-back-sharp" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Data Entry Screen</Text>
        </View>
        <View style={styles.flexContainer}>
          <TextInput
            style={styles.input}
            placeholder="UPC"
            value={upc}
            onChangeText={(upc) => setUpc(upc)}
          />
          <TextInput
            style={styles.input}
            placeholder="Quantity"
            value={quantity}
            onChangeText={(quantity) => setQuantity(quantity)}
          />
          <TextInput
            style={styles.input}
            placeholder="Zone"
            value={zone}
            onChangeText={(zone) => setZone(zone)}
          />
          <TextInput
            style={styles.input}
            placeholder="Aisle"
            value={aisle}
            onChangeText={(aisle) => setAisle(aisle)}
          />
          <TextInput
            style={styles.input}
            placeholder="Shelf"
            value={shelf}
            onChangeText={(shelf) => setShelf(shelf)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddItem}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
  },
  header: {
    backgroundColor: '#118ab2',
    padding: 25,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 26,
    left: 15,
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#118ab2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#118ab2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
