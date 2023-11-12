import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    backgroundColor: '#4a4e69',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  accountDetailsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: '#4a4e69',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  changeImageButton: {
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: '#4a4e69',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  changeImageButtonText: {
    color: '#4a4e69',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
