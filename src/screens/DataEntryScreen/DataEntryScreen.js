import React, { useState, useEffect, useRef } from 'react';
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
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

const { width, height } = Dimensions.get('window');

export default function DataEntryScreen({ navigation }) {
  const [upc, setUpc] = useState('');
  const [quantity, setQuantity] = useState('');
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
  // left camera open to continuously scan
      setIsCameraOpen(true);
      ref_quantity.current.focus();
    };

    const handleBarcodeIconPress = () => {
      setScanned(false);
      setIsCameraOpen(!isCameraOpen);
    };
  // adds product to database
  const handleAddUpc = () => {
      const quantityNumber = parseFloat(quantity);
      addItemToDatabase(upc, quantityNumber, zone, shelf);
      setUpc('');
      setQuantity('');
      setScanned(false);
    };
  //exits zone to put product into new zone
    const handleAddZone = () => {
      setUpc('');
      setQuantity('');
      setZone('');
      setShelf('');
      setScanned(false);
    };
  //exits shelf to add product to new shelf
  const handleAddShelf = () => {
      setUpc('');
      setQuantity('');
      setShelf('');
      setScanned(false);
    };
  //references to different fields
  const ref_zone = useRef();
  const ref_shelf = useRef();
  const ref_upc = useRef();
  const ref_quantity = useRef();
  const ref_cam = useRef();
  const ref_bar = useRef();

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

            <TextInput                                      //inputs the zone value
                style={styles.input}
                placeholder="Zone"
                value={zone}
                autoFocus = {true}
                onChangeText={(zone) => setZone(zone)}
                returnKeyType ="next"
                onSubmitEditing={() =>ref_shelf.current.focus()}
                keyboardType = "numeric"
                ref={ref_zone}
            />
            <TextInput                              //inputs shelf
              style={styles.input}
              placeholder="Shelf"
              value={shelf}
              onChangeText={(shelf) => setShelf(shelf)}
              returnKeyType = "next"
              onSubmitEditing ={()=>{!isCameraOpen ? ref_upc.current.focus():undefined }}
              ref={ref_shelf}
              keyboardType ="numeric"
            />
            {!isCameraOpen && (
              <TextInput                        //inputs upc info if camera not active
                style={styles.input}
                placeholder="UPC"
                value={upc}
                onChangeText={(upc) => setUpc(upc)}
                returnKeyType = "next"
                onSubmitEditing = {()=>ref_quantity.current.focus()}
                ref={ref_upc}
                editable={!scanned}
                keyboardType="numeric"
              />
            )}
            {isCameraOpen && hasPermission && (         //inputs upc info via the camera
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
            <TextInput                          //input for quantity
              style={styles.input}
              placeholder="Quantity"
              value={quantity}
              onChangeText={(quantity) => setQuantity(quantity)}
              returnKeyType = "done"
              onSubmitEditing ={()=>{

              if(!isCameraOpen){
              handleAddUpc();
              ref_upc.current.focus();
              }
              else handleAddUpc();
              } }
           ref={ref_quantity}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={()=>{
                handleAddShelf();
                ref_shelf.current.focus()}}>
              <Text style={styles.buttonText}>Exit Shelf</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{
               handleAddZone();
               ref_zone.current.focus()}}>
             <Text style={styles.buttonText}>Exit Zone</Text>
           </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
