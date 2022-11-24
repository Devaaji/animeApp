/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../pages/home';
import SearchPage from '../pages/search';
import AnimePages from '../pages/anime';
import ProfilePage from '../pages/profile';
import useStoreAnime from '../store/useStoreAnime';

const Tab = createMaterialBottomTabNavigator();

const TabNavigationScreen = () => {
  const currentFavorit = useStoreAnime(state => state.currentFavorit);

  return (
    <Tab.Navigator barStyle={{backgroundColor: 'black'}}>
      <Tab.Screen
        name="Homepage"
        component={HomePage}
        options={{
          tabBarLabel: 'HomePage',
          tabBarIcon: ({color}) => (
            <Materialicon name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Materialicon name="search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={AnimePages}
        options={{
          tabBarLabel: 'Favorite',
          tabBarBadge: currentFavorit.length,
          tabBarIcon: ({color}) => (
            <Materialicon name="favorite" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Materialicon name="switch-account" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationScreen;
