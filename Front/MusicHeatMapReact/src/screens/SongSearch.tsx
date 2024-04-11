import React, {Component} from 'react';
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
    Alert,
    TouchableOpacity,
    Platform,
    Pressable,
    Modal,
    Button
  } from 'react-native';

import MapView, {Heatmap, Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';

var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"

const CLIENT_ID = "0c3d2802ab2047e69ec778d3417a9323";
const CLIENT_SECRET = "76a472dd41154b6cbe1c53f9e0e268ba";



const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
         justifyContent: 'flex-end',
         alignItems: 'center',
         height: "90%"
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    postButton:{
      borderRadius: 50,
      margin: 20,
      alignContent: 'center',
      height: "10%",
      width: "90%",
      marginBottom: 20,
      paddingVertical: 20,
      paddingHorizontal: 12,
      backgroundColor: bgColor,
      },
    postButtonText:{
      fontSize: 30,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      alignContent: 'center',
      color: textColor
    },
    goBackButtonPost:{
      borderRadius: 50,
      margin: 20,
      height:40,
      width:40,
      alignContent: 'center',
      backgroundColor: '#ffffff',
    },
    textInputBox:{
      height:70,
      width:'90%',
      backgroundColor: bgColor,
      borderColor: textColor,
      borderWidth: 5,
      borderRadius: 20,
      margin:10,
      padding:20,
      fontSize:30
    },
    fullSize:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: bgColor,
    },
    centerItems:{
      alignItems: 'center',
      flex:3,
    }
  });

const SongPostPage = props => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [tracks, setTracks] = useState([]);

    const onPress = () => {
      props.navigation.navigate('ScreenOne');
    };
    
    useEffect(() => {
        //API access token
        var authParamaters ={
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id='+ CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParamaters)
            .then(result => result.json())
            .then(data=> setAccessToken(data.access_token))
    }, [])
    
    //search
    async function search() {
        var songParamaters = {
            method: 'Get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        var Songs = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', songParamaters)
            .then(response => response.json())
            .then(data => {setTracks(data.tracks.items)})
    }
    return(
      <ScrollView style={styles.fullSize}>
        
        <View>
            <TouchableOpacity style={styles.goBackButtonPost} onPress={onPress}/>
        </View>
        <View  style={styles.centerItems}>
            <TextInput id='searchbox' onChangeText={newText => setSearchInput(newText)} defaultValue={searchInput} style={styles.textInputBox} placeholder='Search for your song!'></TextInput>
            <Button title={'Search'} onPress={search}></Button>
        </View>
        <ScrollView style={{flex:1}}>
            {tracks.map((track, i) => {
                console.log(JSON.stringify(track, null, 2));
                return (
                    <View>
                        
                        <Text style={{color:'#FFFFFF'}} key={track.id}>{track.name}</Text>
                    </View>
                )
            })}
        </ScrollView> 
        <View>
            <Text style={{color:'#FFFFFF'}}>Bruh</Text>
        </View>  
      </ScrollView>
    );
  }

  export default SongPostPage;