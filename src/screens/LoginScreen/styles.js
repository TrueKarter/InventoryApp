/* Styles for the Login Screen */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  /* Background style covering the entire screen */
  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  /* Style for the login button */
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    padding: 15,
    width: '80%',
  },

  /* Styles for the text inside the login button */
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  /* Container style for the login screen content */
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Style for the row container of text links */
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  /* Style for text links */
  text: {
    fontSize: 18,
  },

  /* Style for the input fields (email and password) */
  input: {
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    color: 'white',
    fontSize: 18,
    height: 50,
    marginBottom: 18,
    padding: '2%',
    width: '80%',
    backgroundColor: 'rgba(12,12,12,0.5)',
  },

  /* Style for the title text */
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});

export default styles;
