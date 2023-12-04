import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { removeItemFromDatabase } from '../../firebase/DatabaseFunctions';
import styles from './styles';

export default function RemovalScreen({ navigation }) {
  const [upc, setUpc] = useState('');
  const [quantityToRemove, setQuantityToRemove] = useState('1');
  const [zone, setZone] = useState('');
  const [shelf, setShelf] = useState('');
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setUpc(data);
    setIsCameraOpen(false);
  };

  const handleBarcodeIconPress = () => {
    setScanned(false);
    setIsCameraOpen(!isCameraOpen);
  };

  const handleRemoveItem = () => {
    const quantityToRemoveNumber = parseFloat(quantityToRemove);

    removeItemFromDatabase(upc, quantityToRemoveNumber, zone, shelf);
    setUpc('');
    setQuantityToRemove('1');
    setZone('');
    setShelf('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="arrow-back" size={40} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Removal Screen</Text>
      </View>

      <View style={styles.flexContainer}>
        <TouchableOpacity
          style={styles.barcodeIcon}
          onPress={handleBarcodeIconPress}
        >
          <AntDesign name="barcode" size={40} color="#a1c181" />
        </TouchableOpacity>

        {!isCameraOpen && (
          <TextInput
            style={styles.input}
            placeholder="UPC"
            textAlign="center"
            value={upc}
            onChangeText={(upc) => setUpc(upc)}
          />
        )}

        {isCameraOpen && hasPermission && (
          <View style={styles.cameraContainer}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={styles.camera}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsCameraOpen(false)}
            >
              <Text style={styles.buttonText}>Close Camera</Text>
            </TouchableOpacity>
          </View>
        )}

        {!isCameraOpen && (
          <TextInput
            style={styles.input}
            placeholder="Zone"
            textAlign="center"
            value={zone}
            onChangeText={(zone) => setZone(zone)}
          />
        )}

        {!isCameraOpen && (
          <TextInput
            style={styles.input}
            placeholder="Shelf"
            textAlign="center"
            value={shelf}
            onChangeText={(shelf) => setShelf(shelf)}
          />
        )}

        {!isCameraOpen && (
          <TextInput
            style={styles.quantityInput}
            textAlign="center"
            value={quantityToRemove}
            onChangeText={(quantityToRemove) =>
              setQuantityToRemove(quantityToRemove)
            }
          />
        )}

        <TouchableOpacity style={styles.button} onPress={handleRemoveItem}>
          <Text style={styles.buttonText}>REMOVE ITEM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
