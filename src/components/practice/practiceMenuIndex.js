import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import styles from "./practiceMenuIndexStyle";
import { useNavigation } from "@react-navigation/native";

const PracticingMenuScreen = ({ navigation }) => {
  const handleButtonPress = (word) => {
    console.log("Button pressed", word);
    navigation.navigate("InstructionScreen", { word });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.iconText}>PRACTICE INDEX</Text>
      <Text style={styles.mainText}>BRAILLE ÜBEN</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("ALPHABETE")}
      >
        <Text style={styles.buttonText}>Alphabete Üben</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("ZAHLEN")}
      >
        <Text style={styles.buttonText}>Zahlen Üben</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress("Taktile")}
      >
        <Text style={styles.buttonText}>Übung mit Braille</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => navigation.navigate('StudentScreen')}
      >
      <Text style={styles.HOMEText} >GO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PracticingMenuScreen;
