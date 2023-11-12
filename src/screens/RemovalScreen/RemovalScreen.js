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
import styles from './styles';

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
