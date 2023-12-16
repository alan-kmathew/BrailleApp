// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001A91'
  },
  title: {
    color: 'white',
    marginBottom: 100,
    fontSize: 30,
    fontWeight: 'bold'
  },
  usr_input: {
    height: 68,
    width: '80%',
    borderWidth: 1,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  pswrd_input: {
    height: 68,
    width: '80%',
    fontSize: 25,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: 'yellow',
    padding: 20,
    width: 200,
    height: 68,
    borderRadius: 5,
    marginTop: 40
  },
  buttonText: {
    color: '#001A91',
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },

  bck_btn: {
    backgroundColor: 'yellow',
    padding: 20,
    width: 150,
    height: 60,
    borderRadius: 5,
    marginTop: 40
  },
  bck_btn_text: {
    color: '#001A91',
    fontSize: 21,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
});

export default styles;
