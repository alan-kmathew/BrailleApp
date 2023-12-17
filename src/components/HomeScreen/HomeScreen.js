import React, { useState,useEffect} from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet,Linking } from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from '@react-native-community/blur';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    // Enable VoiceOver when the screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
    });

    // Disable VoiceOver when the screen is blurred
    return unsubscribe;
  }, [navigation]);

  const [isTeacherModalVisible, setIsTeacherModalVisible] = useState(false);

  const handleTeacherPress = () => {
    setIsTeacherModalVisible(true);
  };

  const handleTeacherConfirm = async () => {
    setIsTeacherModalVisible(false);

    // Open device settings
    await Linking.openSettings();

    // Navigate to the next screen
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudentScreen')} title="Next Screen">
        <Text style={styles.buttonText}>Studentin/Studenten</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleTeacherPress} title="Next Screen">
        <Text style={styles.buttonText}>Lehrerin/Lehrer</Text>
      </TouchableOpacity>

      <Modal visible={isTeacherModalVisible} animationType="fade" transparent>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white" // Change this to match your background color
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>BITTE SCHALTEN SIE ZUERST DIE SPRACHAUSGABE AUS</Text>

              <TouchableOpacity style={styles.confirmButton} onPress={handleTeacherConfirm}>
                <Text style={styles.buttonText}>HIER KLICKEN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};


export default HomeScreen;
