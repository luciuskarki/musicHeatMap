//React Imports
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Page Imports EG: Login Page, Profile Page ect...
import LoginPage from "./src/screens/LoginScreens/LoginPage.tsx"
import MyTabs from "./src/screens/MyTabs.tsx"

//adding this line for a reason i cannot disclose at this time


//Button and Color Imports
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  FlatListComponent,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Tab = createBottomTabNavigator();







function App(): React.JSX.Element {
  //<LoginPage /> <MyTabs /> goes in navCont when wanting home page
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  ); 
}

export default App;
