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


  function HistoryElement(){
    const songArray = dummySongs.map(dummySongs =>
      <View key={dummySongs.id} style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
      }}>
        <View
        style={{
          flexDirection: 'row',
          borderColor: 'black',
          borderWidth: 2,
          borderRadius: 10,
          padding: 10,
        }}>
            <View style={{
              flex:3
            }}>
              <Text style={styles.HistoryText}>
                {dummySongs.username}
              </Text>
              <Text style={styles.HistoryText}>
                {dummySongs.title}
              </Text>
              <Text style={styles.HistoryText}>
                {dummySongs.artist}
              </Text>
              <Text style={styles.HistoryText}>
                {dummySongs.genre}
              </Text>
            </View>
            <View style={{
                alignContent: 'center',
                flexDirection: 'row',
                flex:1
              }}>
                <Image 
                source={require("../assets/settingsicon.png")}
                style={{
                  width:100,
                  height:100
                }}>
                </Image>
            </View>
      </View>
    </View>
      )
    return (
        <View>
        {songArray}
        </View>
    )
  }
  
  
  
  function HistoryScreen() {
    return (
      <HistoryElement>
      </HistoryElement>
    );
  }
  
  export default HistoryScreen;

  const styles = StyleSheet.create({
    HistoryText: {
      fontSize: 20,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
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
    
  ]