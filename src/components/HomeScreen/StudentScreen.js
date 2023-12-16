// StudentScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styles from "../../styles/StudentScreen.styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const StudentScreen = ({ navigation }) => {
    const handleButton2Press = () => {
        // Handle the press for button 2
        console.log('clicked on practice button');
    };
    return (
        <View style={styles.container}>
            <Icon
                name="home" // Specify the name of the icon (e.g., 'home' for a home icon)
                size={80}
                color="black"
                style={styles.icon}
                onPress={() => navigation.navigate('HomeScreen')}
                title="Previous Screen"
            />
            <Text style={styles.iconText} onPress={() => navigation.navigate('HomeScreen')}>Home</Text>
            <Text style={styles.mainText}>START BRAILLE
                {'\n'} {/* New line */}
                LERNEN & ÜBEN</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LearningMenuScreen')}>
                <Text style={styles.buttonText}>Learning</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleButton2Press}>
                <Text style={styles.buttonText}>Practice</Text>
            </TouchableOpacity>
        </View>
    );
};



export default StudentScreen;
