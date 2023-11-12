import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  headerContainer: {
    height: '20%',
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    position: 'absolute',
    top: 90,
    left: 20,
  },
  gridContainer: {
    height: '75%',
  },
  rowContainer: {
    height: '33.33%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: '45%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonDesc: {
    color: 'gray',
    paddingHorizontal: 10,
  },
});

export default styles;
