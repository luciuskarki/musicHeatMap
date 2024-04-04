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

  function ProfileScreen() {
    return (
      <SafeAreaView style = {styles.container}>
        <View style = {styles.profileBorder}>
          <View style = {styles.profileImageContainer}> 
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
  export default ProfileScreen;

              
var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:bgColor ,
  
    },  
    profileBorder:{
        flexDirection: 'row',
        borderColor: textColor,
        borderWidth: 2 ,
        borderRadius: 1,
        padding: 10,
        backgroundColor: bgColor,
        paddingHorizontal: 20,
        paddingVertical: 100,
    },
    HistoryText: {
        fontSize: 20,
        color: textColor
      },
    
    buttonContainer:{
        flex:3
    },
    ImagesContainer:{
        alignContent: 'center',
        flexDirection: 'row',
        flex:1,
        
    },
    profileImageContainer:{
      borderColor: textColor,
      borderWidth: 5 ,
      borderRadius: 100,
      backgroundColor: bgColor,
      paddingHorizontal: 40,
      paddingVertical: 40,
      marginRight: 40,
    }
    });