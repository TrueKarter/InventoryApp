import React, { useState, useEffect } from 'react';
import { retrieveData } from '../../firebase/DatabaseFunctions';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';



export default function GenerateReportScreen ({navigation}) {

const [ ZoneRangeStart, setZRS ] = useState('')
const [ ZoneRangeEnd, setZRE ] = useState('')
const [ ShelfRangeStart, setSRS ] = useState('')
const [ ShelfRangeEnd, setSRE ] = useState('')

const DataReceived = [];
const handleDisplayData = (ZoneRangeStart, ZoneRangeEnd, ShelfRangeStart, ShelfRangeEnd)=>{
   retrieveData(ZoneRangeStart, ZoneRangeEnd, ShelfRangeStart, ShelfRangeEnd);
};




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

            <TouchableOpacity style ={[{margin:40},styles.button]} onPress={()=>{
                //function stuff here;
                }}>
                <Text style={styles.buttonText}> Display </Text>
            </TouchableOpacity>

     </View>
  </SafeAreaView>
);
}//end of export function