import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import styles from "./LearnAlphabetsStyles";


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

const LearnAlphabets = ({ navigation }) => {
  const [currentAlphabet, setCurrentAlphabet] = useState(0);

  const handleNext = () => {
    if (currentAlphabet < BrailleData.length - 1) {
      setCurrentAlphabet(currentAlphabet + 1);
    } else {
      showLearningCompletePopup({navigation});
    }
  };

  const handleBack = () => {
    if (currentAlphabet > 0) {
      setCurrentAlphabet(currentAlphabet - 1);
    }
  };

  const showLearningCompletePopup = ({navigation}) => {
    Alert.alert(
      "Lernen komplett",
      "Herzlichen Glückwunsch! Sie haben das Erlernen des Alphabets in Braille abgeschlossen.",
      [{ text: "OK", onPress: () => navigation.navigate('LearningMenuScreen') }]
    );
  };

  const renderBraille = () => {
    const brailleRepresentation = BrailleData[currentAlphabet];

    return (
      <View style={styles.dotContainer}>
        {[0, 3].map((start, row) => (
          <View key={row} style={styles.row}>
            {brailleRepresentation.slice(start, start + 3).map((dot, index) => (
              <View
                key={index + start}
                style={dot === "1" ? styles.dot : styles.emptyDot}
              >
                <Text style={styles.dotText}>{index + start + 1}</Text>
              </View>
            ))}
          </View>
        ))}
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
      Jetzt lernen Sie das Alphabet {String.fromCharCode(97 + currentAlphabet).toUpperCase()}
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

export default LearnAlphabets;

