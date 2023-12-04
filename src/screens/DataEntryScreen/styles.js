import { Dimensions, StyleSheet } from 'react-native'; // Import Dimensions and StyleSheet from react-native

const { width, height } = Dimensions.get('window'); // Destructure width and height from Dimensions

/* Create styles using Stylesheet.create */
const styles = StyleSheet.create({
  /* Container style for the entire screen */
  container: {
    backgroundColor: '#f2f2f2',
  },

  /* Flex container style for content alignment */
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
  },

  /* Header style containing a background color and padding */
  header: {
    backgroundColor: '#118ab2',
    padding: 25,
    marginBottom: 20,
  },

  /* Back button style positioned absolutely */
  backButton: {
    position: 'absolute',
    top: 26,
    left: 15,
    width: 70,
    height: 70,
  },

  /* Header text style with font size, boldness, color, and center alignment */
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  /* Barcode icon style with margin and opacity */
  barcodeIcon: {
    marginBottom: 20,
    opacity: 0.8,
  },

  /* Input style for text input fields */
  input: {
    borderWidth: 1,
    borderColor: '#118ab2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
  },

  /* Button style for interactive buttons */
  button: {
    backgroundColor: '#118ab2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },

  /* Text style for button text */
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  /* Camera container style for the barcode scanner */
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height,
    width,
  },

  /* Camera style filling the entire screen */
  camera: {
    ...StyleSheet.absoluteFillObject,
  },

  /* Close button style for closing the camera view */
  closeButton: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#118ab2',
    padding: 10,
    borderRadius: 8,
  },
});

export default styles; // Export the styles for use in DataEntrytScreen
