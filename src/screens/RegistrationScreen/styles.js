import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Style for the registration button */
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    height: 50,
    padding: 15,
    marginTop: 50,
    width: '90%',
  },

  /* Style for the text inside the registration button */
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  /* Style for the main container */
  container: {
    alignItems: 'center',
    backgroundColor: '#fafafc',
    flex: 1,
    justifyContent: 'center',
  },

  /* Style for the form container */
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: '90%',
  },

  /* Style for the footer text */
  footerText: {
    color: '#2e2e2d',
    fontSize: 14,
    marginTop: 10,
  },

  /* Style for the link in the footer */
  footerLink: {
    color: 'red',
    fontWeight: 'bold',
  },

  /* Style for the input fields */
  input: {
    backgroundColor: '#fafafc',
    borderRadius: 12,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    width: '100%',
  },

  /* Style for the label text */
  label: {
    color: '#b7b6bd',
  },

  /* Style for the title */
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
});

export default styles;
