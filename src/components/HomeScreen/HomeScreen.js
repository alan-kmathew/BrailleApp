import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import styles from '../../styles/HomeScreen.styles';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from '@react-native-community/blur';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [isTeacherModalVisible, setIsTeacherModalVisible] = useState(false);

  const handleTeacherPress = () => {
    setIsTeacherModalVisible(true);
  };

  const handleTeacherConfirm = () => {
    setIsTeacherModalVisible(false);
    navigation.navigate('LoginScreen');
  };

  const handleTeacherCancel = () => {
    setIsTeacherModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StudentScreen')} title="Next Screen">
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleTeacherPress} title="Next Screen">
        <Text style={styles.buttonText}>Teacher</Text>
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
              <Text style={styles.modalText}>TURN OFF VOICE OVER FIRST</Text>

              <TouchableOpacity style={styles.confirmButton} onPress={handleTeacherConfirm}>
                <Text style={styles.buttonText}>CLICK HERE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};


export default HomeScreen;
