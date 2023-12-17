// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001A91'
    },
    button: {
        marginTop: 1,
        backgroundColor: 'yellow',
        padding: 10,
        margin: 50,
        borderRadius: 6,
        width: 300,
        height: 60
    },
    buttonText: {
        marginTop: 3,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#001A91',
        fontSize: 25,
    },
    mainText: {
        margin: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'yellow',
        fontSize: 25,
    },
    icon: {
        color: 'yellow',
        alignItems: 'center',
    },
    iconText: {
        textAlign: 'center',
        color: 'yellow',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    }
});

export default styles;
