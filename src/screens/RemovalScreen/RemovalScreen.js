import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { removeItemFromDatabase } from '../../firebase/DatabaseFunctions';

export default function RemovalScreen() {
  const [upc, setUpc] = useState('');
  const [quantityToRemove, setQuantityToRemove] = useState('1');

  const handleRemoveItem = () => {
    const quantityToRemoveNumber = parseFloat(quantityToRemove);

    removeItemFromDatabase(upc, quantityToRemoveNumber);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Removal Screen</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="UPC"
        value={upc}
        onChangeText={(upc) => setUpc(upc)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity to Remove"
        value={quantityToRemove}
        onChangeText={(quantityToRemove) =>
          setQuantityToRemove(quantityToRemove)
        }
      />
      <Button title="Remove Item" onPress={handleRemoveItem} />
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
