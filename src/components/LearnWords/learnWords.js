import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import styles from "./learnWordsStyles";

const BrailleData = [
  ["1", "0", "1", "0", "1", "0"], // Represents Braille for a
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for b
  ["1", "1", "0", "1", "0", "0"], // Represents Braille for c
  ["1", "0", "0", "1", "0", "0"], // Represents Braille for d
  ["1", "1", "1", "1", "0", "0"], // Represents Braille for e
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for f
  ["1", "1", "1", "1", "0", "0"], // Represents Braille for g
  ["1", "0", "0", "0", "1", "0"], // Represents Braille for h
  ["1", "1", "0", "0", "1", "0"], // Represents Braille for i
  ["0", "1", "1", "0", "1", "0"], // Represents Braille for j
  ["1", "0", "1", "0", "0", "0"], // Represents Braille for k
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for l
  ["1", "1", "0", "1", "0", "0"], // Represents Braille for m
  ["1", "0", "0", "1", "0", "0"], // Represents Braille for n
  ["1", "1", "1", "1", "0", "0"], // Represents Braille for o
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for p
  ["1", "1", "1", "1", "1", "0"], // Represents Braille for q
  ["1", "0", "0", "0", "1", "0"], // Represents Braille for r
  ["1", "1", "0", "0", "1", "0"], // Represents Braille for s
  ["0", "1", "1", "0", "1", "0"], // Represents Braille for t
  ["1", "0", "1", "0", "0", "0"], // Represents Braille for u
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for v
  ["0", "1", "1", "1", "0", "0"], // Represents Braille for w
  ["1", "1", "0", "0", "1", "0"], // Represents Braille for x
  ["0", "1", "1", "0", "1", "0"], // Represents Braille for y
  ["1", "0", "0", "1", "1", "0"], // Represents Braille for z
];

const ThreeLetterWords = ["cat", "dog", "bat", "pen", "sun", "map"];

const LearnWords = ({navigation}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex === ThreeLetterWords.length) {
      Alert.alert(
        "Lernen komplett",
        "Herzlichen Glückwunsch! Sie haben nun alle Wörter gelernt.",
        [{ text: "OK", onPress: () => console.log("Lernen komplett") }]
      );
    }
  }, [currentWordIndex]);

  const handleNext = () => {
    if (currentLetterIndex < 2) {
      setCurrentLetterIndex(currentLetterIndex + 1);
    } else {
      setCurrentLetterIndex(0);
      if (currentWordIndex < ThreeLetterWords.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        Alert.alert(
          "Lernen komplett",
          "Herzlichen Glückwunsch! Sie haben nun alle Wörter gelernt.",
          [{ text: "OK", onPress: () => console.log("Lernen komplett") }]
        );
        return;
      }
      Alert.alert(
        "Gelernte Wörter",
        `Herzlichen Glückwunsch! Sie haben das Wort gelernt: ${ThreeLetterWords[currentWordIndex]}`,
        [{ text: "OK", onPress: () => console.log("Gelernte Wörter") }]
      );
    }
  };

  const handleBack = () => {
    if (currentLetterIndex > 0) {
      setCurrentLetterIndex(currentLetterIndex - 1);
    } else {
      if (currentWordIndex > 0) {
        setCurrentWordIndex(currentWordIndex - 1);
        setCurrentLetterIndex(2);
      }
    }
  };

  const renderBraille = () => {
    const currentWord = ThreeLetterWords[currentWordIndex];
    const currentLetter = currentWord[currentLetterIndex];
    const brailleRepresentation = BrailleData[currentLetter.charCodeAt(0) - 97];

    return (
      <View style={styles.dotContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            {brailleRepresentation.slice(0, 3).map((dot, index) => (
              <View
                key={index}
                style={dot === "1" ? styles.dot : styles.emptyDot}
              >
                <Text style={styles.dotText}>{index + 1}</Text>
              </View>
            ))}
          </View>
          <View style={styles.column}>
            {brailleRepresentation.slice(3, 6).map((dot, index) => (
              <View
                key={index + 3}
                style={dot === "1" ? styles.dot : styles.emptyDot}
              >
                <Text style={styles.dotText}>{index + 4}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homebtn} onPress={() => navigation.goBack()}>
          <Text style={styles.homebtntext}>Home</Text>
        </TouchableOpacity>
      <View style={styles.header}>
        <View style={styles.line} />
      </View>
      <Text style={styles.text}>
      Jetzt lernen Sie Word: {ThreeLetterWords[currentWordIndex]}
      </Text>
      <Text style={[styles.text, { marginTop: 10 }]}>
      Schreiben: {ThreeLetterWords[currentWordIndex][currentLetterIndex]}
      </Text>
      {renderBraille()}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
          <Text style={styles.buttonText}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnNext} onPress={handleNext}>
          <Text style={styles.buttonText}>Nächste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LearnWords;

