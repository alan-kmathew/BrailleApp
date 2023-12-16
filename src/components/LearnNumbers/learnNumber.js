import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import styles from "./learnNumberStyles";

const BrailleData = [
  ["1", "0", "1", "0", "1", "0"], // Represents Braille for 0
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for 1
  ["1", "1", "0", "1", "0", "0"], // Represents Braille for 2
  ["1", "0", "0", "1", "0", "0"], // Represents Braille for 3
  ["1", "1", "1", "1", "0", "0"], // Represents Braille for 4
  ["1", "0", "1", "1", "0", "0"], // Represents Braille for 5
  ["1", "1", "1", "1", "0", "0"], // Represents Braille for 6
  ["1", "0", "0", "0", "1", "0"], // Represents Braille for 7
  ["1", "1", "0", "0", "1", "0"], // Represents Braille for 8
  ["1", "0", "1", "0", "1", "0"], // Represents Braille for 9
];

const LearnNumbers = ({ navigation }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const handleNext = () => {
    if (currentNumber < 9) {
      setCurrentNumber(currentNumber + 1);
    } else {
      Alert.alert(
        "Lernen komplett",
        "Du hast das Lernen aller Zahlen abgeschlossen!",
        [{ text: "OK" }]
      );
    }
  };

  const handleBack = () => {
    if (currentNumber > 0) {
      setCurrentNumber(currentNumber - 1);
    }
  };

  const renderBraille = () => {
    const brailleRepresentation = BrailleData[currentNumber];

    return (
      <View style={styles.dotContainer}>
        <View style={styles.row}>
          {brailleRepresentation.slice(0, 3).map((dot, index) => (
            <View
              key={index}
              style={dot === "1" ? styles.dot : styles.emptyDot}
            >
              <Text style={styles.dotText}>{index + 1}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
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
        Jetzt sind Sie Learning Number: {currentNumber}
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

export default LearnNumbers;


