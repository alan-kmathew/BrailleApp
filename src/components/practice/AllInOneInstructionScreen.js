import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const InstructionScreen = ({ route, navigation }) => {
  const { word } = route.params;
  const handleNextPress = () => {
    if (word === "ALPHABETE") {
      navigation.navigate("PracticeAlphabets");
    } else if (word === "ZAHLEN") {
      navigation.navigate("PracticeNumbers");
    } else if (word === "Taktile") {
      navigation.navigate("TactileExercise");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>{`${word} ÜBEN `}</Text>
      <View style={styles.header}>
        <View style={styles.line} />
      </View>
      <View style={styles.contentContainer}>
        {word === "ALPHABETE" && (
          <Text style={styles.sentence}>
            {" "}
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
        {word === "Taktile" && (
          <Text style={styles.sentence}>
            {" "}
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
          <Text style={styles.buttonText}>Zurück</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Weiter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#001A91",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  line: {
    height: 2,
    backgroundColor: "#FFEC00",
    flex: 1,
  },
  headerText: {
    fontSize: height > 600 ? 30 : 20,
    color: "#FFEC00",
    marginTop: 20,
    fontWeight: "bold",
  },
  sentence: {
    color: "white",
    fontSize: height > 600 ? 20 : 16,
    fontWeight: "regular",
    marginTop: 20,
    textAlign: "left",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFEC00",
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    width: width > 600 ? 172 : 120,
    height: height > 600 ? 62 : 48,
  },
  buttonText: {
    color: "#001A91",
    textAlign: "center",
    fontSize: height > 600 ? 25 : 18,
    marginTop: 5,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 27,
  },
});

export default InstructionScreen;
