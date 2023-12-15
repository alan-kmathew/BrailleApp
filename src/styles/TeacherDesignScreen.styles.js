// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    icon: {
        color: 'yellow',
        alignItems: 'center',
        marginTop: 100
    },
    iconText: {
        textAlign: 'center',
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    mainText: {
        margin: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'yellow',
        fontSize: 28,
    },
    button: {
        marginTop: 1,
        backgroundColor: 'white',
        padding: 10,
        margin: 50,
        borderRadius: 30,
        width: 300,
        height: 60,
        shadowColor:'yellow',
        shadowOffset: { width: 2, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow opacity
        shadowRadius: 8, // Shadow blur radius
    },
    buttonText: {
        marginLeft: 80,
        marginTop: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'blue',
        fontSize: 25,
    },
    number: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign:'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
    padding: 10,
    margin:10,
    marginRight:180,
    marginTop:-34,
    backgroundColor:'yellow',
    overflow:'hidden'
    },
    albhabet: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign:'center',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
    padding: 10,
    margin:10,
    marginRight:180,
    marginTop:-34,
    backgroundColor:'yellow',
    overflow:'hidden'
    }



});

export default styles;
