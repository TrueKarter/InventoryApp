import React, { useState } from 'react';
import { addItemToDatabase } from '../../firebase/DatabaseFunctions';
import { Button, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DataEntryScreen() {
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [aisle, setAisle] = useState('');
  const [shelf, setShelf] = useState('');

  const handleAddItem = () => {
    addItemToDatabase(upc, quantity, aisle, shelf);

    setUpc('');
    setQuantity('');
    setAisle('');
    setShelf('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Data Entry Screen</Text>
      <TextInput
        placeholder="UPC"
        value={upc}
        onChangeText={(upc) => setUpc(upc)}
      />
      <TextInput
        placeholder="Quantity"
        value={quantity}
        onChangeText={(quantity) => setQuantity(quantity)}
      />
      <TextInput
        placeholder="Aisle"
        value={aisle}
        onChangeText={(aisle) => setAisle(aisle)}
      />
      <TextInput
        placeholder="Shelf"
        value={shelf}
        onChangeText={(shelf) => setShelf(shelf)}
      />
      <Button title="Add Item" onPress={handleAddItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
