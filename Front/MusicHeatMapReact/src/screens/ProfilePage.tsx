import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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



  const HomeProfile = props => {
    const onPress = () => {
      props.navigation.navigate('ScreenTwo');
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
          <Text style = {styles.userText}>{`Username \nUniqueID `}</Text>
        </View> 
      </View>
      
    <View style = {styles.buttonContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style = {styles.buttonText}> Profile Settings</Text>
      </TouchableOpacity>
    </View>




      
    </SafeAreaView>
  );
  } //add buttons between 2 views and then apply to "ScreenTwo"

  const ProfileSettings = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>PlaceHolder</Text>
      </View>
    );
  };


  function ProfileScreen() {
    
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="ScreenOne" component={HomeProfile} />
          <Stack.Screen name="ScreenTwo" component={ProfileSettings} />
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