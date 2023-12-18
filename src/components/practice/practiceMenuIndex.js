// import React from "react";
// import { View, Text } from "react-native";
// import { TouchableOpacity, StyleSheet } from "react-native";
// import styles from "../practice/practiceMenuIndexStyle";
// import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import styles from "./../../styles/LearningMenu.styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

// const PracticingMenuScreen = ({ navigation }) => {
//   const handleButtonPress = (word) => {
//     console.log("Button pressed", word);
//     navigation.navigate("InstructionScreen", { word });
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.iconText}>PRACTICE INDEX</Text>
//       <Text style={styles.mainText}>BRAILLE ÜBEN</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress("ALPHABETE")}
//       >
//         <Text style={styles.buttonText}>Alphabete Üben</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress("ZAHLEN")}
//       >
//         <Text style={styles.buttonText}>Zahlen Üben</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => handleButtonPress("Taktile")}
//       >
//         <Text style={styles.buttonText}>Übung mit Braille</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.buttonHome}
//         onPress={() => navigation.navigate('StudentScreen')}
//       >
//       <Text style={styles.HOMEText} >GO HOME</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


const PracticingMenuScreen = ({ navigation }) => {
  const handleButtonPress = (word) => {
    console.log("Button pressed", word);
    navigation.navigate("InstructionScreen", { word });
  };
  return (
      <View style={styles.container}>
          <Icon
              name="home" // Specify the name of the icon (e.g., 'home' for a home icon)
              size={80}
              color="black"
              style={styles.icon}
              onPress={() => navigation.navigate('StudentScreen')}
              title="Previous Screen"
          />
          <Text style={styles.iconText} onPress={() => navigation.navigate('StudentScreen')}>Home</Text>
          <Text style={styles.mainText}>BRAILLE ÜBEN</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('ALPHABETE')}>
              <Text style={styles.buttonText}>Alphabete Üben</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('ZAHLEN')}>
              <Text style={styles.buttonText}>Zahlen Üben</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Taktile')}>
              <Text style={styles.buttonText}>Übung mit Braille</Text>
          </TouchableOpacity>
      </View>
  );
};

export default PracticingMenuScreen;
