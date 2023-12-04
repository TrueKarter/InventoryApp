import { StyleSheet } from 'react-native';

/* StyleSheet for styling the HomeScreen component */
const styles = StyleSheet.create({
  /* Styling for the main container of the HomeScreen */
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },

  /* Styling for the header container containing user information */
  headerContainer: {
    height: '20%',
    paddingHorizontal: 20,
  },

  /* Styling for the user's profile picture */
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 15,
  },

  /* Styling for the title text in the header */
  title: {
    fontSize: 24,
    position: 'absolute',
    top: 90,
    left: 20,
  },

  /* Styling for the main grid container */
  gridContainer: {
    height: '75%',
  },

  /* Styling for each row in the grid */
  rowContainer: {
    height: '33.33%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  /* Styling for each pressable buttin in the grid */
  button: {
    width: '45%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Styling for the icon container within each button */
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Styling for the label text of each button */
  buttonLabel: {
    fontWeight: 'bold',
    marginVertical: 10,
  },

  /* Styling for the description text of each button */
  buttonDesc: {
    color: 'gray',
    paddingHorizontal: 10,
  },
});

export default styles;
