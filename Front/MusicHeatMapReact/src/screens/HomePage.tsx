
import React, {Component} from 'react';
import Geolocation from "react-native-geolocation-service";

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
    PermissionsAndroid
  } from 'react-native';

import MapView, {Polyline, Heatmap, Marker, PROVIDER_GOOGLE} from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
       justifyContent: 'flex-end',
       alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Map extends React.Component<any,any>{
  
    constructor(props) {
      super(props);
       this.state = {
          latitude: 0,
          longitude: 0,
          coordinates: [],
       };
     }
      requestLocationPermission = async () => {
      try {
        let granted = await PermissionsAndroid.request(
          
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Geolocation Permission',
            message: 'Can we access your location?',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
          console.log('You can use Geolocation');
          return true;
        } else {
          console.log('You cannot use Geolocation');
          return false;
        }
      } catch (err) {
        return false;
      }
    };

     async componentDidMount() {
      let result = this.requestLocationPermission();
      result.then(res => {
        console.log('res is:', res);
        if (res) {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            coordinates: this.state.coordinates.concat({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            }),
            
          });
          console.log("location" + this.state.latitude);
        },
        error => {
          Alert.alert(error.message.toString());
        },
        {
          enableHighAccuracy: true, timeout: 15000, maximumAge: 10000
        },
      );
    }
    });
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          coordinates: this.state.coordinates.concat({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
      },
      error => {
        console.log(error);
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
        distanceFilter: 0,
      },
    );
  }
//if this is where we can pass in the data to heatmap
    render() {    
    return (
      
        <View style={styles.container}>
            <MapView
                //this is where you can change the properties of the map
               provider={PROVIDER_GOOGLE}
               style={styles.map}
               region={{
              latitude: this.state.latitude,
               longitude: this.state.longitude,
               latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}>
              <Marker
              coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
                }}>
              </Marker>
            </MapView>
        </View>
        
    ); 
  }
} 
