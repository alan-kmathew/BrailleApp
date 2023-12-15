// SentenceScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ route, navigation }) => {
  const { word } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.line} />
      </View>
      <Text style={styles.headerText}>{`${word} Learning`}</Text>
      {word === 'Alphabets' && (
        <Text style={styles.sentence}>
          Here you will explore the alphabets from A to Z. The box in Braille shows the corresponding number you will learn.
        </Text>
      )}
      {word === 'Numbers' && (
        <Text style={styles.sentence}>
          Here you will explore the numbers from 1 to 9. The box in Braille shows the corresponding number you will learn.
        </Text>
      )}
      {word !== 'Alphabets' && word !== 'Numbers' && (
        <Text style={styles.sentence}>
          Here you will explore the words. The box in Braille shows the corresponding number you will learn.
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Button 2 pressed')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingTop: height * 0.05,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  line: {
    height: 2,
    backgroundColor: 'yellow',
    flex: 1,
  },
  headerText: {
    fontSize: width > 600 ? 30 : 18,
    color: 'yellow',
    marginTop: height * 0.02,
    fontWeight: 'bold',
  },
  sentence: {
    color: 'white',
    fontSize: width > 600 ? 40 : 28,
    fontWeight: 'bold',
    marginTop: height * 0.12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: height * 0.14,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: width * 0.02,
    width: width > 600 ? width * 0.3 : 172,
    height: height * 0.07,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
    fontSize: width > 600 ? 30 : 25,
    marginTop: height * 0.00,
  },
});

export default WelcomeScreen;
