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
      <Text style={styles.headerText}>{`${word} Lernen`}</Text>
      {word === 'Alphabets' && (
        <Text style={styles.sentence}>
          Hier lernen Sie das Alphabet von A bis Z kennen. Das Kästchen in Brailleschrift zeigt die entsprechende Zahl, die Sie lernen werden.
        </Text>
      )}
      {word === 'Numbers' && (
        <Text style={styles.sentence}>
          Hier werden Sie die Zahlen von 1 bis 9 erkunden. Das Kästchen in Brailleschrift zeigt die entsprechende Zahl, die Sie lernen werden.
        </Text>
      )}
      {word !== 'Alphabets' && word !== 'Numbers' && (
        <Text style={styles.sentence}>
          Hier werden Sie die Wörter erkunden. Der Kasten in Blindenschrift zeigt die entsprechende Zahl, die Sie lernen werden.
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}>Zurück</Text>
        </TouchableOpacity>
        {word === 'Alphabets' && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LearnAlphabets')}>
        <Text style={styles.buttonText} >Weiter</Text>
        </TouchableOpacity>
        )}
         {word === 'Numbers' && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LearnNumbers')}>
        <Text style={styles.buttonText} >Weiter</Text>
        </TouchableOpacity>
        )}
         {word !== 'Alphabets' && word !== 'Numbers' && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LearnWords')}>
        <Text style={styles.buttonText} >Weiter</Text>
        </TouchableOpacity>
        )}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#001A91',
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
    color: '#001A91',
    textAlign: 'center',
    fontSize: width > 600 ? 30 : 25,
    marginTop: height * 0.00,
  },
});

export default WelcomeScreen;
