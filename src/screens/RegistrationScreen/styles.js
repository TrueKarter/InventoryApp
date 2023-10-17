import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
    padding: 15,
    marginTop: 50,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fafafc',
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '90%',
  },
  footerText: {
    color: '#2e2e2d',
    fontSize: 14,
    marginTop: 10,
  },
  footerLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fafafc',
    borderRadius: 12,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '100%',
  },
  label: {
    color: '#b7b6bd',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
});

export default styles;
