// styles.js
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001A91'
  },
  button: {
    marginTop: 5,
    backgroundColor: 'yellow',
    padding: 10,
    margin: width > 600 ? 40 : 80, // Adjust margin based on screen width
    borderRadius: 6,
    width: width > 600 ? 400 : 300, // Adjust width based on screen width
    height: 60
  },
  buttonText: {
    marginTop: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#001A91',
    fontSize: width > 600 ? 30 : 25, // Adjust font size based on screen width
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#001A91',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'yellow',
    fontSize: width > 600 ? 24 : 20, // Adjust font size based on screen width
  },
  confirmButton: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  }
});

export default styles;
