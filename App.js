import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigationScreen from './src/routes/TabNavigationScreen';
import DetailDataAnime from './src/pages/detailAnime';
import AllAnimePage from './src/pages/all-anime';
import GenreAnimePage from './src/pages/genre-anime';
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <NativeBaseProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerStyle: {backgroundColor: 'black'}}}>
            <Stack.Screen
              name="Root"
              component={TabNavigationScreen}
              options={{headerShown: false, animation: 'slide_from_right'}}
            />
            <Stack.Screen
              name="Detail"
              component={DetailDataAnime}
              options={{
                title: 'Detail Anime',
                headerBackTitle: false,
                headerTintColor: 'white',
                animation: 'slide_from_right',
              }}
            />
            <Stack.Screen
              name="AllAnime"
              component={AllAnimePage}
              options={({route}) => ({
                title: route.params.nameHeader,
                headerTintColor: 'white',
                animation: 'slide_from_right',
              })}
            />
            <Stack.Screen
              name="GenreAnime"
              component={GenreAnimePage}
              options={({route}) => ({
                title: route.params.nameHeader,
                headerTintColor: 'white',
                animation: 'slide_from_right',
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </NativeBaseProvider>
  );
};

export default App;
