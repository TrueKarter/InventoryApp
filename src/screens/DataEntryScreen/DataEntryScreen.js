import React, { useState, useEffect, useRef } from 'react';
import { addItemToDatabase } from '../../firebase/DatabaseFunctions';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

/* DataEntryScreen component for entering item data into the database */
export default function DataEntryScreen({ navigation }) {
  /* State variables to manage input data */
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
  const [zone, setZone] = useState('');
  const [shelf, setShelf] = useState('');

  /* State variables for barcode scanner */
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  /* Request camera permissions on component mount */
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  /* Handle barcode scanned event */
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setUpc(data);
    setIsCameraOpen(false);
    ref_quantity.current.focus();
  };

  /* Handle barcode icon press to open/close camera */
  const handleBarcodeIconPress = () => {
    setScanned(false);
    setIsCameraOpen(!isCameraOpen);
  };

  /* Handle adding UPC to the database */
  const handleAddUpc = () => {
    /* Validate empty fields before adding the item */
    if (
      upc.trim() === '' ||
      quantity.trim() === '' ||
      zone.trim() === '' ||
      shelf.trim() === ''
    ) {
      alert('Please fill out all fields before adding the item.');
      return;
    }

    const quantityNumber = parseFloat(quantity);
    addItemToDatabase(upc, quantityNumber, zone, shelf);
    setUpc('');
    setQuantity('');
    setScanned(false);
    ref_upc.current.blur();
  };

  /* Handle adding Zone to the database */
  const handleAddZone = () => {
    setUpc('');
    setQuantity('');
    setZone('');
    setShelf('');
    setScanned(false);
  };

  /* Handle adding Shelf to the database */
  const handleAddShelf = () => {
    setUpc('');
    setQuantity('');
    setShelf('');
    setScanned(false);
  };

  /* Refs for focusing on input fields */
  const ref_zone = useRef();
  const ref_shelf = useRef();
  const ref_upc = useRef();
  const ref_quantity = useRef();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Ionicons name="arrow-back-sharp" size={50} color="white" />
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

            <TextInput
              style={styles.input}
              placeholder="Zone"
              value={zone}
              autoFocus={true}
              onChangeText={(zone) => setZone(zone)}
              returnKeyType="done"
              onSubmitEditing={() => ref_shelf.current.focus()}
              keyboardType="numeric"
              ref={ref_zone}
            />
            <TextInput
              style={styles.input}
              placeholder="Shelf"
              value={shelf}
              onChangeText={(shelf) => setShelf(shelf)}
              returnKeyType="done"
              onSubmitEditing={() => {
                !isCameraOpen ? ref_upc.current.focus() : undefined;
              }}
              ref={ref_shelf}
              keyboardType="numeric"
            />
            {!isCameraOpen && (
              <TextInput
                style={styles.input}
                placeholder="UPC"
                value={upc}
                onChangeText={(upc) => setUpc(upc)}
                onSubmitEditing={() => ref_quantity.current.focus()}
                ref={ref_upc}
                editable={!scanned}
                keyboardType="numeric"
                returnKeyType="done"
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
              returnKeyType="done"
              onSubmitEditing={() => {
                if (!isCameraOpen) {
                  handleAddUpc();
                  ref_upc.current.focus();
                } else handleAddUpc();
              }}
              ref={ref_quantity}
              keyboardType="numeric"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAddShelf();
                ref_shelf.current.focus();
              }}
            >
              <Text style={styles.buttonText}>Exit Shelf</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleAddZone();
                ref_zone.current.focus();
              }}
            >
              <Text style={styles.buttonText}>Exit Zone</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
