import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LastPage = ({ route }) => {
  const navigation = useNavigation();

  const { word } = route.params;

  console.log("Route params:", route.params);
  const handleIndexPress = () => {
    navigation.navigate("PracticingMenu");
  };
  return (
    <View style={styles.container}>
      {word === "ALPHABETE" && (
        <Text style={(styles.mainHeading, styles.whiteText)}>
          {"APHABETE ÜBEN "}
        </Text>
      )}
      {word === "ZAHLEN" && (
        <Text style={(styles.mainHeading, styles.whiteText)}>
          {"ZHALEN ÜBEN "}
        </Text>
      )}
      <Text style={(styles.subHeading, styles.whiteText)}>Fertig !</Text>
      <View style={styles.rectangleBox}>
        <Text style={styles.smallHeading}>Glückwunsch!</Text>
        <MaterialCommunityIcons
          name="emoticon-happy"
          size={100}
          color="#001A91"
        />
        <Text style={styles.boxText}>Du hast einen tollen Job gemacht!</Text>
      </View>
      <TouchableOpacity style={styles.indexButton} onPress={handleIndexPress}>
        <Text style={styles.buttonText}>Index</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    textColor: "White",
  },
  rectangleBox: {
    backgroundColor: "yellow",
    padding: 36,
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
    fontSize: 20,
    marginTop: 10,
    color: "#001A91",
  },
  indexButton: {
    backgroundColor: "white",
    padding: 9,
    borderRadius: 18,
  },
  buttonText: {
    color: "#001A91",
    fontSize: 36,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  whiteText: {
    color: "#FFEC00",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 30,
  },
});

export default LastPage;
