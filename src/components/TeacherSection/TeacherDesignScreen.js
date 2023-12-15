// Learning Menu screen.js
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styles from "./../../styles/TeacherDesignScreen.styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const TeacherDesignScreen = ({ navigation }) => {
    const handleButton1Press = (word) => {
        console.log('Button 1 pressed');
    };
    return (
        <View style={styles.container}>
            <Icon
                name="home" // Specify the name of the icon (e.g., 'home' for a home icon)
                size={60}
                color="black"
                style={styles.icon}
                onPress={() => navigation.navigate('HomeScreen')}
                title="Previous Screen"
            />
            <Text style={styles.iconText} onPress={() => navigation.navigate('HomeScreen')}>Home</Text>
            <Text style={styles.mainText}>Exercise design</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('QuestionDraftScreen')}>Numbers</Text>
                <Text style={styles.number}>123</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Alphabets</Text>
                <Text style={styles.number}>A</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Words</Text>
                <Text style={styles.number}>ABC</Text>
            </TouchableOpacity>
        </View>
    );
};



export default TeacherDesignScreen;
