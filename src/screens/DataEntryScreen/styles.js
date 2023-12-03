import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  flexContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%',
  },
  header: {
    backgroundColor: '#118ab2',
    padding: 25,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 26,
    left: 15,
    width: 70,
    height: 70,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  barcodeIcon: {
    marginBottom: 20,
    opacity: 0.8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#118ab2',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    fontSize: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#118ab2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height,
    width,
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#118ab2',
    padding: 10,
    borderRadius: 8,
  },
});

export default styles;
