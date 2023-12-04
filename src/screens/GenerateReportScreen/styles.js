import { StyleSheet } from 'react-native'; // Import the StyleSheet module from 'react-native'

/* Create and export the styles object using StyleSheet.create */
const styles = StyleSheet.create({
  /* Styling for the main container */
  container: {
    backgroundColor: '#fff',
  },

  /* Styling for the container with flex properties */
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%',
  },

  /* Styling for the header section */
  header: {
    backgroundColor: '#ff0000',
    paddingTop: 35,
    paddingBottom: 35,
  },

  /* Styling for the header text */
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  /* Styling for the back button */
  backButton: {
    position: 'absolute',
    top: 26,
    left: 15,
    width: 70,
    height: 70,
  },

  /* Styling for the flex container with different marginTop */
  flexContainer: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Styling for the input fields */
  input: {
    width: '40%',
    backgroundColor: 'rgba(12,12,12,0.1)',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
  },

  /* Styling for the button */
  button: {
    alignItems: 'center',
    backgroundColor: '#a1c181',
    borderRadius: 8,
    height: 50,
    padding: 15,
    width: '80%',
    marginTop: 50,
    justifyContent: 'center',
  },

  /* Styling for the button text */
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles; // Export the styles object
