import React, { useState } from 'react';
import SearchFriend from './FriendsSearch';

import {
    SafeAreaView,
    TextInput,
    StyleSheet,
    View,
  } from 'react-native';


  function FriendsList(){
    const [input, setInput] = useState("");

    const friendArray = dummyFriends.map(dummyFriends =>
      <View key={dummyFriends.id} style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      }}>
      </View>
    
      )
    return (
    <SafeAreaView style = {styles.container}>
        <TextInput
        value = {input}
        onChangeText={(text) => setInput(text)}
        placeholder= "Search a title..."
        placeholderTextColor={textColor}
        style={styles.searchbox}
      />
      <SearchFriend data={dummyFriends} input = {input} setInput = {setInput}/>

    </SafeAreaView>
    )
  }
  
  function FriendsHolder () {
    return (
      <FriendsList> 
      </FriendsList>
    );
  }
  
  export default FriendsHolder;

  var textColor = "#52b788" //b864b9 pink 95d5b2 green
  var bgColor = "#1b2021"

  const styles = StyleSheet.create({
    searchbox:{
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: bgColor,
      color:textColor,
      marginBottom: 10,
     borderTopWidth: 0,
     borderLeftWidth: 0,
     borderRightWidth: 0,
     borderBottomWidth: 2,
     borderColor: textColor
    },      
    container: {
      flex: 1,
      backgroundColor:bgColor ,
  
    },  
  });

//Dummy Friends
  const dummyFriends = [
    {
      id: 1,
      username: 'Karki',
   
    },
    {
      id: 2,
      username: 'Nikki',
  
    },
    {
      id: 3,
      username: 'Jan',
    
    },
    
    {
      id: 4,
      username: 'JoeShmoe',
   
    },
    {
      id: 5,
      username: 'Eepy',
 
    },
  ];