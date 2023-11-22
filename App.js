import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/Screens/HomeScreen";
import Welcome from './src/Screens/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}