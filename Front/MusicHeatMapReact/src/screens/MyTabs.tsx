import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './HomePage.tsx';
import SettingsScreen from './SettingsPage.tsx';
import ProfileScreen from './ProfilePage.tsx';
import HistoryScreen from './HistoryPage.tsx';

import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TextInput,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';


const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        height: 100,
        elevation: 0,
        backgroundColor: 'rgba(137, 196, 244, 1)'
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Map"
        component={HomePage} 
        options={{
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('../assets/maybe_the_one.png')}
              style={{
                aspectRatio: '3/2',
                width: 70,
                height: 50
              }}
              >
              </Image>
              <Text>
                Music Map!
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen name="History"
        component={HistoryScreen} 
        options={{
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('../assets/listen_history_icon.png')}
              style={{
                aspectRatio: '456/470',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                History
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={SettingsScreen} 
        options={{
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('../assets/settingsicon.png')}
              style={{
                aspectRatio: '512/512',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Settings
              </Text>
            </View>
            )
        }}
    />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('../assets/even_thicker_line_profile_image.png')}
              style={{
                aspectRatio:'9/16',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Profile
              </Text>
            </View>
            )
        }}
    />
    </Tab.Navigator>
  );
}

export default MyTabs;