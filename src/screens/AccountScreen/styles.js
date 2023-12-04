import { StyleSheet } from 'react-native'; // Import the StyleSheet module from react-native

/* Define styles for the Account Screen component */
const styles = StyleSheet.create({
  /* Style for the main container of the Account Screen */
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  /* Style for the header container at the top of the screen */
  headerContainer: {
    backgroundColor: '#4a4e69',
    padding: 20,
    marginBottom: 20,
  },

  /* Style for the title text in the header */
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  /* Style for the back button in the header */
  headerBackButton: {
    position: 'absolute',
    top: '70%',
    left: '2%',
  },

  /* Style for the container holding account details */
  accountDetailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  /* Style for the labels of individual details (e.g., Full Name, Email) */
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  /* Style for the text of individual details */
  detailText: {
    fontSize: 16,
    marginBottom: 15,
  },

  /* Style for the logout button */
  logoutButton: {
    backgroundColor: '#4a4e69',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },

  /* Style for the text of the logout button */
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  /* Style for the container holding the profile picture */
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  /* Style for the profile picture image */
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  /* Style for the button to change the profile picture */
  changeImageButton: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#4a4e69',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },

  /* Style for the text of the change image button */
  changeImageButtonText: {
    color: '#4a4e69',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles; // Export the styles for use in AccountScreen component
