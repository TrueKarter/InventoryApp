import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    getFirestore,
    query,
    where } from 'firebase/firestore';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';



export default function GenerateReportScreen ({navigation}) {

const [ ZoneRangeStart, setZRS ] = useState('')
const [ ZoneRangeEnd, setZRE ] = useState('')
const [ ShelfRangeStart, setSRS ] = useState('')
const [ ShelfRangeEnd, setSRE ] = useState('')
const [Data, setData] = useState('')

const retrieveData  = async (ZoneRangeStart, ZoneRangeEnd, ShelfRangeStart, ShelfRangeEnd) =>{
  let DataGet =[];
  const inventoryCollection = collection(db, 'inventory');
  const querySnapshot = await getDocs(inventoryCollection);
  for(const document of querySnapshot.docs){
    const data = document.data();
        if( ZoneRangeStart <= data.zone && data.zone <= ZoneRangeEnd){
          if( ShelfRangeStart <= data.shelf && data.shelf <= ShelfRangeEnd){
            DataGet.push(data);
          }
        }
  }
  return DataGet;
};

useEffect(() => {
    const fetchData = async () => {
        const Data = await retrieveData(ZoneRangeStart, ZoneRangeEnd, ShelfRangeStart, ShelfRangeEnd );
        setData(Data);
    };
    fetchData();
}, [ZoneRangeStart, ZoneRangeEnd, ShelfRangeStart, ShelfRangeEnd]);


return(
  <SafeAreaView>
     <View style = {styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
                style = {styles.backButton}
                onPress = {()=> navigation.navigate('Home')}
              >
                <Ionicons name = "arrow-back-sharp" size ={50} color = "white" />
            </TouchableOpacity>
            <Text style = {styles.headerText}> Generate Report Screen </Text>
        </View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{margin:10}}>       Zone Range Start </Text>
            <Text style = {{margin:10}}>  Zone Range End           </Text>
        </View>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
                style = {[{margin :10}, styles.input]}
                placeholder = "Start"
                textAlign = "center"
                value = {ZoneRangeStart}
                onChangeText = {(ZoneRangeStart) => setZRS(ZoneRangeStart)}
            />


            <TextInput
                style = {[{margin :10}, styles.input]}
                placeholder = "End"
                textAlign = "center"
                value = {ZoneRangeEnd}
                onChangeText = {(ZoneRangeEnd) => setZRE(ZoneRangeEnd)}
            />
        </View>

        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {{margin:10}}>       Shelf Range Start </Text>
            <Text style = {{margin:10}}>  Shelf Range End           </Text>
        </View>

        <View style = {{ flexDirection : 'row', justifyContent: 'space-between'}}>
            <TextInput
                style = {[{margin :10}, styles.input]}
                placeholder = "Start"
                textAlign = "center"
                value = {ShelfRangeStart}
                onChangeText = {(ShelfRangeStart) => setSRS(ShelfRangeStart)}
            />

            <TextInput
                style = {[{margin :10}, styles.input]}
                placeholder = "End"
                textAlign = "center"
                value = {ShelfRangeEnd}
                onChangeText = {(ShelfRangeEnd) => setSRE(ShelfRangeEnd)}
            />
          </View>

          <View style = {{ margin:10, padding: 10, borderWidth:1, borderColor:'black', backgroundColor:'white'}}>
            <Text>zone          shelf          upc               quantity</Text>
            {Data && Data.length >0 && <FlatList
              data={Data.map((obj, index) => ({id:index+1,...obj }))}
              renderItem={({item}) =>
              <View style ={{flex:1, margin:5}}>
                  <Text>{item.zone} {item.shelf} {item.upc}</Text>

                  <Text></Text>
                  <Text>{item.quantity}</Text>
              </View>
                }
                numColumns ={4}

            />}
        </View>


     </View>
  </SafeAreaView>
);
}//end of export function