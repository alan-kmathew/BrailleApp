import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./LearnBrailleTactileStyles";

const generateRandomLetters = (targetLetter) => {
  const exercises = [
    ['a', 'b', 'c', 'd', 'e', targetLetter], 
    ['f', 'g', 'h', 'i', 'j', targetLetter],
    ['k', 'l', 'm', 'n', 'o', targetLetter],
  ];

  const currentExerciseIndex = Math.floor(Math.random() * exercises.length);
  const currentExercise = exercises[currentExerciseIndex];

  const shuffledLetters = currentExercise.sort(() => Math.random() - 0.5);
  return shuffledLetters;
};

const BrailleTraining = () => {
  const possibleTargetLetters = ['x', 'y', 'z', 'w']; 
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const targetLetter = possibleTargetLetters[currentTargetIndex];

  const [letters, setLetters] = useState(generateRandomLetters(targetLetter));
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    setLetters(generateRandomLetters(targetLetter));
    setCurrentLetterIndex(0);
  }, [targetLetter]);

  const handleLetterPress = (index) => {
    setCurrentLetterIndex(index);
  };

  const handleNext = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex < letters.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handleBack = () => {
    setCurrentLetterIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const handleCheck = () => {
    const currentLetter = letters[currentLetterIndex];
    if (currentLetter === targetLetter) {
      Alert.alert('Herzlichen Glückwunsch!', `Sie haben den Brief gefunden ${currentLetter.toUpperCase()}!`);
    } else {
      Alert.alert('Erneut versuchen', `Der ausgewählte Buchstabe ist nicht ${targetLetter.toUpperCase()}. Weiter versuchen!`);
    }
  };

  const handleNextExercise = () => {
    setCurrentTargetIndex((prevIndex) => (prevIndex < possibleTargetLetters.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePreviousExercise = () => {
    setCurrentTargetIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : possibleTargetLetters.length - 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} accessible={true} accessibilityLabel={`Finden Sie den Buchstaben: ${targetLetter.toUpperCase()}`}>
      Finden Sie den Buchstaben: {targetLetter.toUpperCase()}
      </Text>
      <View style={styles.letterContainer}>
        {letters.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.letterButton, currentLetterIndex === index && styles.selectedLetter]}
            onPress={() => handleLetterPress(index)}
            accessible={false}
          >
            <Text style={styles.letterText} accessible={false}>
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnCheck} onPress={handleCheck}>
          <Text style={styles.buttonText}>Siehe</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
          <Text style={styles.buttonText}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNext} onPress={handleNext}>
          <Text style={styles.buttonText}>Nächste</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnPreviousExercise} onPress={handlePreviousExercise}>
          <Text style={styles.buttonText}>Vorherige Übung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNextExercise} onPress={handleNextExercise}>
          <Text style={styles.buttonText}>Nächste Übung</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BrailleTraining;



