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
  barcodeIcon: {
    marginBottom: 20,
    opacity: 0.8,
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
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height,
    width,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#118ab2',
    padding: 10,
    borderRadius: 8,
  },
});
