/* Import necessary React components and modules */
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { getForestore, collection, query,  orderBy, getDocs } from 'firebase/firestore';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  LogBox,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'; // Import the styles for this screen

/* Define the GenerateReportScreen component */
export default function GenerateReportScreen({ navigation }) {
LogBox.ignoreAllLogs(true);
  /* State variables to store input values and retrieved data */
  const [zoneRangeStart, setZoneRangeStart] = useState('');
  const [zoneRangeEnd, setZoneRangeEnd] = useState('');
  const [shelfRangeStart, setShelfRangeStart] = useState('');
  const [shelfRangeEnd, setShelfRangeEnd] = useState('');
  const [data, setData] = useState('');

  /* Function to retrieve data based on input ranges */
  const retrieveData = async (
    zoneRangeStart,
    zoneRangeEnd,
    shelfRangeStart,
    shelfRangeEnd
  ) => {
    let dataGet = [];
      const inventoryCollection = collection(db, 'inventory');
      const querySnapshot = await getDocs(inventoryCollection);

      /* Use a for loop to iterate over the querySnapshot array */
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        const document = querySnapshot.docs[i];
        const data = document.data();
        if (zoneRangeStart <= Number(data.zone) && Number(data.zone) <= zoneRangeEnd) {
          if (shelfRangeStart <= Number(data.shelf) && Number(data.shelf) <= shelfRangeEnd) {
            dataGet.push(data);
          }
        }
      }
      dataGet.sort(function(a,b){
        return Number(a.shelf)-Number(b.shelf);
        });
        dataGet.sort(function(a,b){
            return Number(a.zone)-Number(b.zone);
            });
      return dataGet;
    };
    /* Group data by zone and filter by shelf range */


  /* Effect to fetch data when input values change */
  useEffect(() => {
    const fetchData = async () => {
      const Data = await retrieveData(
        zoneRangeStart,
        zoneRangeEnd,
        shelfRangeStart,
        shelfRangeEnd
      );
      setData(Data);
    };
    fetchData();
  }, [zoneRangeStart, zoneRangeEnd, shelfRangeStart, shelfRangeEnd]);

  /* Render the GenerateReportScreen component */
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name="arrow-back-sharp" size={50} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}> Generate Report Screen </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ margin: 10 }}> Zone Range Start </Text>
          <Text style={{ margin: 10 }}> Zone Range End </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={[{ margin: 10 }, styles.input]}
            placeholder="Start"
            textAlign="center"
            value={zoneRangeStart}
            onChangeText={(zoneRangeStart) => setZoneRangeStart(zoneRangeStart)}
          />

          <TextInput
            style={[{ margin: 10 }, styles.input]}
            placeholder="End"
            textAlign="center"
            value={zoneRangeEnd}
            onChangeText={(zoneRangeEnd) => setZoneRangeEnd(zoneRangeEnd)}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ margin: 10 }}> Shelf Range Start </Text>
          <Text style={{ margin: 10 }}> Shelf Range End </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextInput
            style={[{ margin: 10 }, styles.input]}
            placeholder="Start"
            textAlign="center"
            value={shelfRangeStart}
            onChangeText={(shelfRangeStart) =>
              setShelfRangeStart(shelfRangeStart)
            }
          />

          <TextInput
            style={[{ margin: 10 }, styles.input]}
            placeholder="End"
            textAlign="center"
            value={shelfRangeEnd}
            onChangeText={(shelfRangeEnd) => setShelfRangeEnd(shelfRangeEnd)}
          />
        </View>

        <View
          style={{
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: 'white',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}
          >
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Zone</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Shelf</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>UPC</Text>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Quantity</Text>
          </View>

          {data && data.length > 0 && (
            <FlatList
              data={data.map((obj, index) => ({
                id: index + 1,
                ...obj,
              }))}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 5,
                  }}
                >
                  <Text style={{ flex: 1 }}>{item.zone}</Text>
                  <Text style={{ flex: 1 }}>{item.shelf}</Text>
                  <Text style={{ flex: 1 }}>{item.upc}</Text>
                  <Text style={{ flex: 1 }}>{item.quantity}</Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
