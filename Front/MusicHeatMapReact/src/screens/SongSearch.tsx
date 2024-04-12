import {
    ScrollView,
    Image,
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
    } from 'react-native';

import { 
    useState,
    useEffect 
    } from 'react';

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
      backgroundColor: bgColor,
      borderColor: textColor,
      borderWidth: 5,
      borderRadius: 20,
      paddingLeft:15,
      fontSize:30,
      flex:8
    },
    fullSize:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: bgColor,
    },
    centerItems:{
      alignItems: 'center',
      flex:3,
    },
    colorBorder:{
        margin:10,
        padding: 10,
        flexDirection:'row',
    },
    albumImage:{
        aspectRatio:'1/1',
        flex:1
    },
    titleAndArtist:{
        flex:3,
        padding: 10,
        
    },
    songTitle:{
        fontSize: 20,
        color: '#FFFFFF'
    },
    artistName:{
        fontSize: 15,
        color: '#FFFFFF'
    },
  });

const SongPostPage = props => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [tracks, setTracks] = useState([]);
    const [songInfo, setSongInfo] = useState([]);

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
        <View  style={styles.colorBorder}>
            <TextInput id='searchbox' onChangeText={newText => setSearchInput(newText)} defaultValue={searchInput} style={styles.textInputBox} placeholder='Search for your song!'></TextInput>
            <TouchableOpacity style={styles.goBackButtonPost} onPress={onPress}/>
        </View>
        <View style={styles.centerItems}>
            <Button title={'Search'} onPress={search}></Button>
        </View>
        <ScrollView style={{flex:1}}>
            {tracks.map((track, i) => {
                return (
                    <TouchableOpacity key={track.id} onPress={ () => {
                        console.log(track.album.images[0].url)
                        console.log(track.name)
                        console.log(track.artists[0].name)
                        console.log(Date().toLocaleString())
                        onPress()
                    }}>
                        <View style={styles.colorBorder}>
                            <Image style={styles.albumImage} source={{uri:track.album.images[0].url}}></Image>
                            <View style={styles.titleAndArtist}>
                                <Text style={styles.songTitle} >{track.name}</Text>
                                <Text style={styles.artistName} >{track.artists[0].name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView> 
      </ScrollView>
    );
  }

  export default SongPostPage;