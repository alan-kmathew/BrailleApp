// Learning Menu screen.js
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styles from "./../../styles/LearningMenu.styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const LearningMenuScreen = ({ navigation }) => {
    const handleButton1Press = (word) => {
        console.log('Button 1 pressed',word);
        navigation.navigate('WelcomeScreen', { word });
    };
    return (
        <View style={styles.container}>
            <Icon
                name="home" // Specify the name of the icon (e.g., 'home' for a home icon)
                size={80}
                color="black"
                style={styles.icon}
                onPress={() => navigation.navigate('StudentScreen')}
                title="Previous Screen"
            />
            <Text style={styles.iconText} onPress={() => navigation.navigate('StudentScreen')}>Home</Text>
            <Text style={styles.mainText}>START BRAILLE
                {'\n'} {/* New line */}
                LERNEN</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleButton1Press('Alphabete')}>
                <Text style={styles.buttonText}>Lernen Alphabete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleButton1Press('Zahlen')}>
                <Text style={styles.buttonText}>Lernen Zahlen</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleButton1Press('Wörter')}>
                <Text style={styles.buttonText}>Lernen Wörter</Text>
            </TouchableOpacity>
        </View>
    );
};



export default LearningMenuScreen;
