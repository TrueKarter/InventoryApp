import React from 'react'; // Import React to enable the use of JSX syntax

/* Import Navigation Container and createNativeStackNavigator from React Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Import the screens used in the navigation */
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DataEntryScreen from '../screens/DataEntryScreen/DataEntryScreen';
import RemovalScreen from '../screens/RemovalScreen/RemovalScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import GenerateReportScreen from '../screens/GenerateReportScreen/GenerateReportScreen';

const Stack = createNativeStackNavigator(); // Create a stack navigator using createNativeStackNavigator

/* Define the main AppNavigator component as a functional component */
export default function AppNavigator() {
  return (
    /* Use NavigationContainer to wrap the entire navigation structure */
    <NavigationContainer>
      {/* Create a stack navigator with initial route name set to "Login" */}
      <Stack.Navigator initialRouteName="GenerateReport">
        {/* Define each screen in the stack with its name, component, and optional header options */}
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
          name="GenerateReport"
          component={GenerateReportScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
