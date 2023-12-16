import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./TactileExerciseStyles";
import { useNavigation } from "@react-navigation/native";

const generateRandomSymbols = (targetLetter) => {
  const exercises = [
    ["%", "(", "#", "@", "!", targetLetter],
    ["_", "{", "+", "#", "=", targetLetter],
    [":", ">", "<", "~", "]", targetLetter],
  ];

  const currentExerciseIndex = Math.floor(Math.random() * exercises.length);
  const currentExercise = exercises[currentExerciseIndex];

  const shuffledLetters = currentExercise.sort(() => Math.random() - 0.5);
  return shuffledLetters;
};

const TactileExercise = () => {
  const possibleTargetLetters = ["x", "y", "z", "w"];
  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const targetLetter = possibleTargetLetters[currentTargetIndex];

  const [letters, setLetters] = useState(generateRandomSymbols(targetLetter));
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [questionCount, setQuestionCount] = useState(1); // Initialize with 1st question
  const [modalVisible, setModalVisible] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLetters(generateRandomSymbols(targetLetter));
    setCurrentLetterIndex(0);
  }, [targetLetter]);

  const handleLetterPress = (index) => {
    setCurrentLetterIndex(index);
  };

  const handleNext = () => {
    setCurrentLetterIndex((prevIndex) =>
      prevIndex < letters.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setCurrentLetterIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleInstuction = (word) => {
    navigation.navigate("InstructionScreen", { word });
  };

  const handleIndex = () => {
    navigation.navigate("PracticingMenuScreen");
  };

  const handleCheck = () => {
    const currentLetter = letters[currentLetterIndex];

    if (currentLetter === targetLetter) {
      setResultMessage(
        "Herzlichen Glückwunsch!" +
          "\n" +
          `Sie haben den Brief gefunden ${currentLetter.toUpperCase()}!`
      );
      // Increase question count and set new target letter
      setQuestionCount((prevCount) =>
        prevCount === possibleTargetLetters.length ? 1 : prevCount + 1
      );
      setCurrentTargetIndex((prevIndex) =>
        prevIndex === possibleTargetLetters.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setResultMessage(
        "Erneut versuchen" +
          "\n" +
          `Der ausgewählte Buchstabe ist nicht ${targetLetter.toUpperCase()}. Weiter versuchen!`
      );
    }

    setModalVisible(true);

    // Set a timeout to close the modal after 4000 ms (4 seconds)
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        accessible={true}
        accessibilityLabel={`Frage ${questionCount}: Finden Sie den Buchstaben: ${targetLetter.toUpperCase()}`}
      >
        Frage {questionCount}: Finden Sie den Buchstaben:{" "}
        {targetLetter.toUpperCase()}
      </Text>
      <View style={styles.letterContainer}>
        {letters.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.letterButton,
              currentLetterIndex === index && styles.selectedLetter,
            ]}
            onPress={() => handleLetterPress(index)}
            accessible={false}
          >
            <Text style={styles.letterText} accessible={false}>
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{resultMessage}</Text>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnCheck} onPress={handleCheck}>
          <Text style={styles.buttonText}>Prüfen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.btnBack,
            currentLetterIndex === 0 && { opacity: 0.5 }, // Disable the button if it's the first letter
          ]}
          onPress={handleBack}
          disabled={currentLetterIndex === 0}
        >
          <Text style={styles.buttonText}>Zurück letter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnNext,
            currentLetterIndex === letters.length - 1 && { opacity: 0.5 }, // Disable the button if it's the last letter
          ]}
          onPress={handleNext}
          disabled={currentLetterIndex === letters.length - 1}
        >
          <Text style={styles.buttonText}>Nächste letter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.btnCheck}
          onPress={() => handleInstuction("Taktile")}
        >
          <Text style={styles.buttonText}>Anleitung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCheck} onPress={handleIndex}>
          <Text style={styles.buttonText}>Index</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TactileExercise;
