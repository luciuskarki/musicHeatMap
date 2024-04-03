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

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
       height: 400,
       width: 400,
       justifyContent: 'flex-end',
       alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

function HomePage() {
    return (
      <View style={styles.container}>
       <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.0922,
             longitudeDelta: 0.0421,
             }}
       >
       </MapView>
       </View>
    ); 
}
export default HomePage;