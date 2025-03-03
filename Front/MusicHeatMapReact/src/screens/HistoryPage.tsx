import React, { useState } from 'react';
import SearchFilter from './SearchBar';

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


  function HistoryElement(){
    const [input, setInput] = useState("");

    const songArray = dummySongs.map(dummySongs =>
      <View key={dummySongs.id} style={{
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
      <SearchFilter data={dummySongs} input = {input} setInput = {setInput}/>

    </SafeAreaView>
    )
  }
  
  function HistoryScreen() {
    return (
      <HistoryElement> 
      </HistoryElement>
    );
  }
  
  export default HistoryScreen;

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

      //  borderTopLeftRadius: 10,       //Just messing around with stuff 
      //  borderTopRightRadius: 10,
      //  borderBottomLeftRadius: 50000,
      //  borderBottomRightRadius: 50000,
      // borderTopColor: "black",
      // borderBottomColor: "black",
      // borderLeftColor: "#52b788",
      // borderRightColor:"#52b788",

    },      
    container: {
      flex: 1,
      backgroundColor:bgColor ,
  
    },  
  });

//Dummy songs
  const dummySongs = [
    {
      id: 1,
      username: 'Karki',
      title: 'Horse with no name',
      artist: 'America',
      genre: 'something'
    },
    {
      id: 2,
      username: 'Karki',
      title: 'Im a gummy bear',
      artist: 'gummy bear',
      genre: 'Best music ever'
    },
    {
      id: 3,
      username: 'Karki',
      title: 'Sweden',
      artist: 'C418',
      genre: 'Minecraft'
    },
    
    {
      id: 4,
      username: 'Karki',
      title: 'Sweden',
      artist: 'C418',
      genre: 'Minecraft'
    },
    {
      id: 5,
      username: 'Karki',
      title: 'Sweden',
      artist: 'C418',
      genre: 'Minecraft'
    },
    {
      id: 6,
      username: 'Karki',
      title: 'Sweden',
      artist: 'C418',
      genre: 'Minecraft'
    },
    {
      id: 7,
      username: 'Karki',
      title: 'Sweden',
      artist: 'C418',
      genre: 'Minecraft'
    }
    
  ];