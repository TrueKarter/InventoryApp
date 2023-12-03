import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  flexContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '25%',
  },
  header: {
    backgroundColor: '#ff0000',
    paddingTop: 35,
    paddingBottom: 35,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
        top: 26,
        left: 15,
        width: 70,
        height: 70,
  },
  flexContainer: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '40%',
    backgroundColor: 'rgba(12,12,12,0.1)',
    padding: 10,
    borderRadius: 10,
    fontSize: 20,
    marginBottom: 20,
  },
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
