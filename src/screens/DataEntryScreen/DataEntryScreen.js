import React, { useState } from 'react';
import { addItemToDatabase } from '../../firebase/DatabaseFunctions';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DataEntryScreen({ navigation }) {
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [aisle, setAisle] = useState('');
  const [shelf, setShelf] = useState('');

  const handleAddItem = () => {
    const quantityNumber = parseFloat(quantity);

    addItemToDatabase(upc, quantityNumber, aisle, shelf);

    setUpc('');
    setQuantity('');
    setAisle('');
    setShelf('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Data Entry Screen</Text>
      </View>
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
      <Button title="Add Item" onPress={handleAddItem} />
      <Button title="Menu" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
