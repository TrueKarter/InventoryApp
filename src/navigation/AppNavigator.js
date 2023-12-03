import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DataEntryScreen from '../screens/DataEntryScreen/DataEntryScreen';
import RemovalScreen from '../screens/RemovalScreen/RemovalScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import GenerateReportScreen from '../screens/GenerateReportScreen/GenerateReportScreen'

const Stack = createNativeStackNavigator();

/*TODO: Change route name back to Login after done*/
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Removal">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DataEntry"
          component={DataEntryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Removal"
          component={RemovalScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name = "GenerateReport"
            component = {GenerateReportScreen}
            options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
