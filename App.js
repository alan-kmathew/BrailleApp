import React, { useEffect } from "react";
import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";
import StudentScreen from './src/components/HomeScreen/StudentScreen';
import LoginScreen from './src/components/TeacherSection/LoginScreen/LoginScreen';
import LearningMenuScreen from "./src/components/StudentLearningSection/LearningMenuScreen";
import WelcomeScreen from './src/components/StudentLearningSection/WelcomeScreen';
import TeacherDesignScreen from './src/components/TeacherSection/TeacherDesignScreen';
import QuestionDraftScreen from "./src/components/TeacherSection/QuestionDraftScreen";
import LearnNumbers from "./src/components/LearnNumbers/learnNumber.js";
import LearnBrailleTactile from "./src/components/LearnBrailleTactile/LearnBrailleTactile.js";
import LearnWords from "./src/components/LearnWords/learnWords.js";
import LearnAlphabets from "./src/components/LearnAlphabets/learnAlphabets.js";

import PracticeNumbers from "./src/components/practice/practiceNum/practiceNumbers.js";
import PracticeAlphabets from "./src/components/practice/practiceAlpha/practiceAlphabets.js";
import PracticingMenuScreen from "./src/components/practice/practiceMenuIndex.js";
import InstructionScreen from "./src/components/practice/AllInOneInstructionScreen.js";
import LastPage from "./src/components/practice/AllInOneLastPracticePage.js";
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // Enable VoiceOver when the app starts

    // Disable VoiceOver when the app is unmounted
    return () => disableVoiceOver();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        { headerShown: false }
      }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TeacherDesignScreen" component={TeacherDesignScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="LearningMenuScreen" component={LearningMenuScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="QuestionDraftScreen" component={QuestionDraftScreen} />
        <Stack.Screen name="LearnAlphabets" component={LearnAlphabets} />
        <Stack.Screen name="LearnNumbers" component={LearnNumbers} />
        <Stack.Screen name="LearnWords" component={LearnWords} />


        {/* <Stack.Screen
          name="Learning"
          component={LearnBrailleTactile}
          options={{
            headerTintColor: "#001A91",
            headerStyle: {
              backgroundColor: "#FFEC00",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Arial",
            },
          }}
        /> */}

        {/* Add more screens here if needed */}


        <Stack.Screen
          name="InstructionScreen"
          component={InstructionScreen}
          options={{
            headerShown: false, // If you don't want to show the header
          }}
        />
        <Stack.Screen
          name="PracticeNumbers"
          component={PracticeNumbers}
          options={{
            headerShown: false, // If you don't want to show the header
          }}
        />
        <Stack.Screen
          name="PracticeAlphabets"
          component={PracticeAlphabets}
          options={{
            headerShown: false, // If you don't want to show the header
          }}
        />
        <Stack.Screen
          name="LastPage"
          component={LastPage}
          options={{
            headerShown: false, // If you don't want to show the header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
