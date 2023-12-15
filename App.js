import React from "react";
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
import LearnAlphabets from "./src/components/LearnWords/learnWords.js";
import LearnBrailleTactile from "./src/components/LearnBrailleTactile/LearnBrailleTactile.js";
import LearnWords from "./src/components/LearnWords/learnWords.js";
import learnAlphabets from "./src/components/LearnAlphabets/learnAlphabets.js";

const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={
      {headerShown:false}
     }>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="TeacherDesignScreen" component={TeacherDesignScreen} />
        <Stack.Screen name="StudentScreen" component={StudentScreen} />
        <Stack.Screen name="LearningMenuScreen" component={LearningMenuScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="QuestionDraftScreen" component={QuestionDraftScreen} />
        <Stack.Screen
          name="Learning "
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
        />
        {/* Add more screens here if needed */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
 