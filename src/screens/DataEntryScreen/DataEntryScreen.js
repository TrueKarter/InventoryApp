import React, { useState, useEffect } from 'react';
import { addItemToDatabase } from '../../firebase/DatabaseFunctions';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default function DataEntryScreen({ navigation }) {
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [zone, setZone] = useState('');
  const [aisle, setAisle] = useState('');
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

  const handleAddItem = () => {
    const quantityNumber = parseFloat(quantity);
    addItemToDatabase(upc, quantityNumber, zone, aisle, shelf);
    setUpc('');
    setQuantity('');
    setZone('');
    setAisle('');
    setShelf('');
    setScanned(false);
  };

  return (
    <SafeAreaView>
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
            <TouchableOpacity
              style={styles.barcodeIcon}
              onPress={handleBarcodeIconPress}
            >
              <AntDesign name="barcode" size={40} color="#118ab2" />
            </TouchableOpacity>
            {!isCameraOpen && (
              <TextInput
                style={styles.input}
                placeholder="UPC"
                value={upc}
                onChangeText={(upc) => setUpc(upc)}
                editable={!scanned}
                keyboardType="numeric"
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
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              value={quantity}
              onChangeText={(quantity) => setQuantity(quantity)}
              keyboardType="numeric"
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
    </SafeAreaView>
  );
}
