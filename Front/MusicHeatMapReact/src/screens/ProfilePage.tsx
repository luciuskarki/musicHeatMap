import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchFilter from './SearchBar';
import FriendsHolder from './Friends';

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

var username = 'Username'
var UniqueID = 'UniqueID'

const showAlert = () =>
  Alert.alert(
    'Change your Display Name!',
    '',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    }
  );
/*
function changeDisplayName () {
  const [text, setText] = useState('')

  return (
    
    <View>
      <TextInput
        value={text}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(text) => {
          setText(text)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {'\n'}You entered: {text}
      </Text>
    </View>
    )
}
*/   //Set State for changing display name, having troubles implementing due to hooks of useState

  const HomeProfile = props => {
    const imagePress = () => {
      props.navigation.navigate('ScreenTwo');
  

    };
    
    const namePress = () => {
      props.navigation.navigate('ScreenThree');

    };
    
    const friendPress = () => {
      props.navigation.navigate('ScreenFour');

    };
    
  
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.profileBorder}>
        <View style = {styles.profileImageContainer}> 
           <Image source={require("../assets/important_photo_test.jpg")}
                  style = {styles.ImagesContainer}>
            </Image>
        </View>
        <View style = {styles.userTextContainer}>
          <Text style = {styles.userText}> {username} {'\n'} {UniqueID} </Text>
        </View> 
      </View>
      
      <View style = {styles.buttonContainer}>
      <TouchableOpacity onPress={imagePress}>
        <Text style = {styles.buttonText}> Change Profile Picture</Text>
      </TouchableOpacity>

    </View>

    <View style = {styles.buttonContainer}>
      <TouchableOpacity onPress={namePress}>
        <Text style = {styles.buttonText}> Change Display Name</Text>
      </TouchableOpacity>
    </View>



    <View style = {styles.buttonContainer}>
      <TouchableOpacity onPress={friendPress}>
        <Text style = {styles.buttonText}> Friends</Text>
      </TouchableOpacity>
    </View>
      
    </SafeAreaView>
  );
  } //add buttons between 2 views and then apply to "ScreenTwo"

  const ChangeProfileImg = () => {
    return (
      <View>
        <Text> PlaceHolder</Text>
      </View>
    );
  };

  const changeDisplayName = () => {
    return (
      <View>
        <Text> PlaceHolder</Text>
      </View>
    );
  };

  const Friends = () => {
    return (
      <FriendsHolder>
      </FriendsHolder>
    );
  };

  function ProfileScreen() {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ScreenOne" component={HomeProfile} />
          <Stack.Screen name="ScreenTwo" component={ChangeProfileImg} />
          <Stack.Screen name="ScreenThree" component={changeDisplayName} />
          <Stack.Screen name="ScreenFour" component={Friends} />

        </Stack.Navigator>
    );
  };

  
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
        borderBottomWidth: 2,
        borderRadius: 1,
        padding: 0,
        backgroundColor: bgColor,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    
    buttonContainer:{
      borderColor: textColor,
      borderBottomWidth: 2,
      borderRadius: 1,
      padding: 0,
      backgroundColor: bgColor,
    },
    buttonText:{
      fontSize: 33,
      color:textColor
    },
    ImagesContainer:{
      resizeMode: 'cover',
      height: 100,
      width: 100,
      borderWidth: 2,
      borderRadius: 75,
        
    },
    profileImageContainer:{
      borderColor: textColor,
      backgroundColor: bgColor,
      borderWidth: 5 ,
      alignSelf: 'center',
      borderRadius: 100,
    },
    userTextContainer:{
      borderColor: textColor,
      borderRadius: 1,
      alignSelf: 'center',
      marginLeft: 40
    },
    userText:{
      fontSize: 33,
      borderBottomColor: "#52b788",
      borderBottomWidth: 1,
      fontWeight: 'normal',
      textShadowRadius: 15,
      textShadowColor: '#b864b9',
      lineHeight: 30,
      color:textColor
    }
    });