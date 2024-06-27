// src/navigations/BottomTabNavigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Favorite from '../screens/Favorite';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetail from '../screens/MovieDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigation = (): JSX.Element => (
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieDetail}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const BottomTabNavigator = (): JSX.Element => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStackNavigation}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={28} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabNavigator;
