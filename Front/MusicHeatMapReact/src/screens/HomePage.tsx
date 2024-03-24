import React from 'react';

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


function HomePage() {
    return (
      <View>
      <Image source={require("../assets/map.png")}
        style={{
          resizeMode: 'contain',
          aspectRatio: '435/648'
        }}
      >
      </Image>
    </View>
    ); 
  }
  
  export default HomePage;