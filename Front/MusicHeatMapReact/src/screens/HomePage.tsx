import React, {Component, useState} from 'react';
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
    TouchableOpacity,
    Platform,
    Pressable,
    Modal
  } from 'react-native';
import SongPostPage from './SongSearch.tsx';
import MapView, {Heatmap, Marker, PROVIDER_GOOGLE} from 'react-native-maps'

var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"

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
    height:100,
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
    height:'70%'
  }
});

const MapPage = props => {
  const onPress = () => {
    props.navigation.navigate('ScreenTwo');
  };
    //if this is where we can pass in the data to heatmap
  let points=[{latitude: 44.473215997359425, longitude: -73.20414593214373, weight: 1},
    {latitude: 44.474215997359425, longitude: -73.20314593214373, weight: 1},
    {latitude: 44.474215997359425, longitude: -73.20214593214373, weight: 1},
    {latitude: 44.473215997359425, longitude: -73.20314593214373, weight: 1}
    ]

  return (
  <View style={styles.container}>
    <MapView
        //this is where you can change the properties of the map
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
            latitude: 44.473215997359425,
            longitude: -73.20414593214373,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}>
        <Heatmap
            //we can potentially change the gradient of the heatmap
            points={points}>
        </Heatmap>
      </MapView>
      <TouchableOpacity style={styles.postButton} onPress={onPress}>
        <View>
          <Text style={styles.postButtonText}>Post Your Song!</Text>
        </View>
      </TouchableOpacity>
    </View>
  ); 
}

function HomePage() {
  const Stack = createStackNavigator();

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenOne" component={MapPage} />
        <Stack.Screen name="ScreenTwo" component={SongPostPage} />
      </Stack.Navigator>
  );
}

export default HomePage;

