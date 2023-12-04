import { StyleSheet } from 'react-native'; // Import StyleSheet from 'react-native' to create styles

/* Styles for the Removal Screen */
const styles = StyleSheet.create({
  /* Container style for the entire screen */
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  /* Header style with background color and padding */
  header: {
    backgroundColor: '#a1c181',
    paddingTop: 30,
    paddingBottom: 20,
  },

  /* Header text style with center alignment, font size, and bold font weight */
  headerText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  /* Back button style with position relative to the top and left */
  backButton: {
    position: 'relative',
    top: 30,
    left: 15,
  },

  /* Flex container style for the main content with height, alignment, and justification */
  flexContainer: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Input field style with width, background color, padding, border radius, font size, and margin */
  input: {
    width: '80%',
    backgroundColor: 'rgba(12,12,12,0.1)',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
  },

  /* Quantity input style with background color, width , height, margin, font weight, and font size */
  quantityInput: {
    backgroundColor: 'rgba(12,12,12,0.1)',
    width: '20%',
    height: 60,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },

  /* Button style with alignment, background color, border radius, height, padding, weidth, and margin */
  button: {
    alignItems: 'center',
    backgroundColor: '#a1c181',
    borderRadius: 25,
    height: 50,
    padding: 15,
    width: '80%',
    marginTop: 50,
  },

  /* Button text style with font size and bold font weight */
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Camera container style with flex properties, direction, justificaiton, alignment, height, and width */
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },

  /* Camera style with absolute fill properties */
  camera: {
    ...StyleSheet.absoluteFillObject,
  },

  /* Close button style with position, background color, padding, and border radius */
  closeButton: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#a1c181',
    padding: 10,
    borderRadius: 8,
  },
});

export default styles; // Export the styles for use in the RemovalScreen componenet
