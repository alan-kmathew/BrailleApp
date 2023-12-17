import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LastPage = ({ route }) => {
  const navigation = useNavigation();
  // Add a check to ensure route and route.params are defined
  const { word } = route?.params || {};
  console.log("word----------------->",word)
  const handleIndexPress = () => {
    navigation.navigate("PracticingMenuScreen");
  };
  const handleREDOPress = () => {
    if (word === "ALPHABETE") {
      navigation.navigate("PracticeAlphabets");
    } else if (word === "ZAHLEN") {
      navigation.navigate("PracticeNumbers");
    } else if (word === "Taktile") {
      navigation.navigate("TactileExercise");
    }
  };

  return (
    <View style={styles.container}>
      {word === "ALPHABETE" && (
        <Text style={[styles.mainHeading, styles.whiteText]}>
          {"APHABETE ÜBEN "}
        </Text>
      )}
      {word === "ZAHLEN" && (
        <Text style={[styles.mainHeading, styles.whiteText]}>
          {"ZAHLEN ÜBEN "}
        </Text>
      )}
      <Text style={[styles.subHeading, styles.whiteText]}>Fertig !</Text>
      <View style={[styles.rectangleBox, { padding: width > 600 ? 72 : 36 }]}>
        <Text
          style={[styles.smallHeading, { fontSize: width > 600 ? 40 : 30 }]}
        >
          Glückwunsch!
        </Text>
        <MaterialCommunityIcons
          name="emoticon-happy"
          size={width > 600 ? 120 : 100}
          color="#001A91"
        />
        <Text style={[styles.boxText, { fontSize: width > 600 ? 26 : 20 }]}>
          Du hast einen tollen Job gemacht!
        </Text>
      </View>
      <TouchableOpacity style={styles.indexButton} onPress={handleIndexPress}>
        <Text style={[styles.buttonText, { fontSize: width > 600 ? 40 : 36 }]}>
          Index
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.REDOButton}
        onPress={() => handleREDOPress(word)}
      >
        <Text style={[styles.buttonText, { fontSize: width > 600 ? 40 : 36 }]}>
          REDO Übung
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#001A91",
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 36,
    marginBottom: 20,
  },
  rectangleBox: {
    backgroundColor: "#FFEC00",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  smallHeading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#001A91",
  },
  boxText: {
    marginTop: 10,
    color: "#001A91",
  },
  indexButton: {
    backgroundColor: "white",
    padding: 9,
    borderRadius: 18,
  },
  REDOButton: {
    backgroundColor: "red",
    padding: 9,
    borderRadius: 18,
    marginTop: 20,
  },
  buttonText: {
    color: "#001A91",
    fontWeight: "bold",
    paddingHorizontal: 20,
    fontSize: height > 600 ? 25 : 18,
  },
  whiteText: {
    color: "#FFEC00",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default LastPage;
