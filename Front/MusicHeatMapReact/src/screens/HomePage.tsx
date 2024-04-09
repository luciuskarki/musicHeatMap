import React, {Component, useState} from 'react';

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

import MapView, {Heatmap, Marker, PROVIDER_GOOGLE} from 'react-native-maps'

var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"
const [modalVisible, setModalVisible] = useState(false);

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
    paddingHorizontal: 12
    },
  postButtonText:{
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    alignContent: 'center'
  }
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
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View>
                <View>
                  <Text>Hello World!</Text>
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              onPress={()=>setModalVisible(true)}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.postButton,
              ]}>
              {({pressed}) => (
                <Text style={styles.postButtonText}>{pressed ? 'Posting your song!' : 'Post your song!'}</Text>
              )}
              </Pressable>
        </View>
    ); 
}
export default HomePage;