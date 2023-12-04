import React from 'react'; // Import React to enable the use of JSX syntax
import AppNavigator from './src/navigation/AppNavigator'; // Import the main navigation component (AppNavigator) from the specified path
import './src/firebase/config'; // Import the Firebase configuration file (config.js) from the specified path

/* Define the main App component as a functional component */
export default function App() {
  return <AppNavigator />; // Return the AppNavigator component, which handles the overall navigation of the app.
}
