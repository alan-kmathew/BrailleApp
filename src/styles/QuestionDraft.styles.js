import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: width > 600 ? 40 : 30,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    position: 'absolute',
    top: height * 0.1,
  },
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  p1text: {
    color: 'yellow',
    fontWeight: 'regular',
    fontSize: width > 600 ? 20 : 14,
    position: 'absolute',
    top: height * 0.16,
  },
  checkboxSection: {
    marginBottom: 0,
    marginTop: height * 0.18,
    fontSize: width > 600 ? 24 : 18,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: width * 0.05,
    padding: width * 0.01,
  },
  checkboxLabel: {
    color: 'white',
    fontSize: width > 600 ? 30 : 25,
    fontWeight: 'bold',
  },
  checkbox: {
    marginRight: width * 0.03,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width > 600 ? width * 0.6 : 300,
  },
  button: {
    backgroundColor: 'yellow',
    padding: width > 600 ? 20 : 15,
    borderRadius: width > 600 ? 40 : 30,
    flex: 1,
    marginHorizontal: 5,
    marginTop: height * 0.03,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: width > 600 ? 20 : 16,
  },
  buttonOk: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: width > 600 ? 25 : 20,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: width * 0.02,
  },
  centeredView: {
    backgroundColor: 'yellow',
    marginTop: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: width > 600 ? width * 0.5 : 350,
    height: height * 0.15,
    marginLeft: width * 0.05,
  },
  modalText: {
    marginBottom: height * 0.02,
    fontSize: width > 600 ? 35 : 25,
    color: 'blue',
    padding: width * 0.03,
  },
});

export default styles;