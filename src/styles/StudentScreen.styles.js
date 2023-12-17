import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001A91',
    },
    button: {
        marginTop: height * 0.01,
        backgroundColor: 'yellow',
        padding: 5,
        margin: width > 600 ? width * 0.0 : 50,
        borderRadius: 6,
        width: width > 600 ? width * 0.6 : 300,
        height: 60
    },
    buttonText: {
        marginTop: height * 0.01,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#001A91',
        fontSize: width > 600 ? 30 : 25,
    },
    mainText: {
        margin: width > 600 ? height * 0.1 : 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: 'yellow',
        fontSize: width > 600 ? 10 : (width * 0.06), // Adjust the factor as needed
    },
    icon: {
        color: 'yellow',
        alignItems: 'center',
    },
    iconText: {
        textAlign: 'center',
        color: 'yellow',
        fontSize: width > 600 ? 40 : 30,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    }
});

export default styles;
