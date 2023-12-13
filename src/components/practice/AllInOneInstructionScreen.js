import React from "react";
import PracticeNumbers from "./practiceNum/practiceNumbers";
import PracticeAlphabets from "./practiceAlpha/practiceAlphabets";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const InstructionScreen = ({ route, navigation }) => {
  const { word } = route.params;
  const handleNextPress = () => {
    // Navigate to the appropriate practice screen based on the 'word'
    if (word === "ALPHABETE") {
      navigation.navigate("PracticeAlphabets");
    } else if (word === "ZAHLEN") {
      navigation.navigate("PracticeNumbers");
    }
    // Add other conditions as needed for different practice screens
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{`${word} ÜBEN `}</Text>
      <View style={styles.header}>
        <View style={styles.line} />
      </View>
      <View style={styles.contentContainer}>
        {word === "ALPHABETE" && (
          <Text style={styles.sentence}>
            - Zuerst hören Sie die aktuelle Anzahl der Fragen aus der Gesamtzahl
            der Fragen.{"\n"} {"\n"}- Dann werden Sie die Frage hören, die Sie
            lösen müssen.{"\n"} {"\n"}- Dann hören Sie die Punkte, das sind die
            Schaltflächen zum An- und Abwählen für die Darstellung der Zahl auf
            der Braillie.
            {"\n"} {"\n"}- Dann hören Sie zwei Tasten, die erste für Anleitung
            und die zweite für Prüfen.
          </Text>
        )}
        {word === "ZAHLEN" && (
          <Text style={styles.sentence}>
            - Zuerst hören Sie die aktuelle Anzahl der Fragen aus der Gesamtzahl
            der Fragen.{"\n"} {"\n"}- Dann werden Sie die Frage hören, die Sie
            lösen müssen.{"\n"} {"\n"}- Dann hören Sie die Punkte, das sind die
            Schaltflächen zum An- und Abwählen für die Darstellung der Zahl auf
            der Braillie.
            {"\n"} {"\n"}- Dann hören Sie zwei Tasten, die erste für Anleitung
            und die zweite für Prüfen.
          </Text>
        )}
        {word !== "ALPHABETE" && word !== "ZAHLEN" && (
          <Text style={styles.sentence}>
            - Zuerst hören Sie die aktuelle Anzahl der Fragen aus der Gesamtzahl
            der Fragen.{"\n"} {"\n"}- Dann werden Sie die Frage hören, die Sie
            lösen müssen.{"\n"} {"\n"}- Dann hören Sie die Punkte, das sind die
            Schaltflächen zum An- und Abwählen für die Darstellung der Zahl auf
            der Braillie.
            {"\n"} {"\n"}- Dann hören Sie zwei Tasten, die erste für Anleitung
            und die zweite für Prüfen.
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "blue",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  line: {
    height: 2,
    backgroundColor: "yellow",
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    color: "yellow",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
  sentence: {
    color: "white",
    fontSize: 20,
    fontWeight: "regular",
    marginTop: 160,
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 180,
    alignItems: "center",
  },
  button: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    width: 172,
    height: 62,
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
    fontSize: 25,
    marginTop: 5,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 27,
  },
});

export default InstructionScreen;
