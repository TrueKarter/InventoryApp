import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Removal Screen</Text>
      </View>
      <View style={styles.flexContainer}>
        <TextInput
          style={styles.input}
          placeholder="UPC"
          textAlign="center"
          value={upc}
          onChangeText={(upc) => setUpc(upc)}
        />
        <TextInput
          style={styles.quantityInput}
          textAlign="center"
          value={quantityToRemove}
          onChangeText={(quantityToRemove) =>
            setQuantityToRemove(quantityToRemove)
          }
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>REMOVE ITEM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#a1c181',
    paddingTop: 30,
    paddingBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flexContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    backgroundColor: 'rgba(12,12,12,0.1)',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
  },
  quantityInput: {
    backgroundColor: 'rgba(12,12,12,0.1)',
    width: '20%',
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#a1c181',
    borderRadius: 25,
    height: 50,
    padding: 15,
    width: '80%',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
