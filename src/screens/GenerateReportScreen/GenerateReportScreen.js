/* Import necessary React components and modules */
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles'; // Import the styles for this screen

/* Define the GenerateReportScreen component */
export default function GenerateReportScreen({ navigation }) {
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

    /* Group data by zone and filter by shelf range */
    const zoneGroupedData = querySnapshot.docs.reduce((acc, document) => {
      const data = document.data();
      if (zoneRangeStart <= data.zone && data.zone <= zoneRangeEnd) {
        if (acc[data.zone]) {
          acc[data.zone].unshift(data);
        } else {
          acc[data.zone] = [data];
        }
      }
      return acc;
    }, {});

    /* Collect filtered data from each zone */
    for (const zone of Object.keys(zoneGroupedData)) {
      const shelfFilteredData = zoneGroupedData[zone].filter((data) => {
        return shelfRangeStart <= data.shelf && data.shelf <= shelfRangeEnd;
      });
      dataGet.push(...shelfFilteredData);
    }
    return dataGet;
  };

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
    </SafeAreaView>
  );
}
