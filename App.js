import React from "react";
import { Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LearnNumbers from "./src/components/LearnNumbers/Number.one";
import LearnAlphabets from "./src/components/LearnAlphabets/alphabetsA";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Learn Numbers"
          component={LearnNumbers}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
