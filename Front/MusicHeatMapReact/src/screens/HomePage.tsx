import React, {Component} from 'react';

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
    Platform
  } from 'react-native';

import MapView, {Heatmap, Marker, PROVIDER_GOOGLE} from 'react-native-maps'

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

function HomePage() {

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
                                                        }}
                                                  >
                <Heatmap
                    //we can potentially change the gradient of the heatmap
                    points={points}

                            >
                </Heatmap>
            </MapView>
        </View>
    ); 
}
export default HomePage;