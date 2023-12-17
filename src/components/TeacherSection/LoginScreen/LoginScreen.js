// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './../../../styles/LoginScreen.styles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login pressed');
    navigation.navigate('TeacherDesignScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN SIETE</Text>

      <TextInput
        style={styles.usr_input}
        placeholder="USERNAME"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.pswrd_input}
        placeholder="PASSWORD"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.bck_btn}>
        <Text style={styles.bck_btn_text}>Zurück</Text>
      </TouchableOpacity>
    </View>
  );
};


export default LoginScreen;
