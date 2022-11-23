import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailDataAnime from '../pages/detailAnime';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Detail" component={DetailDataAnime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
