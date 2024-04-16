import React from "react"; 
import { StyleSheet, Text, View, FlatList, Image} from "react-native"; 


const SearchFriend = ({data, input, setInput}) => {
return (
    <View>
        <FlatList data={data} renderItem={({item}) => {
            if (input === "") {
                return (
                    <View style = {styles.border}>
                        <View style = {styles.MusicContainer}>
                            <Text style={styles.FriendText}>{item.username}</Text>
                        </View>
                    <View style={styles.ImagesContainer}>
                        <Image source={require("../assets/important_photo_test.jpg")}
                            style={{
                            width:100,
                            height:100 }}>
                        </Image>
                    </View>
            </View>
              )
            }
            if (item.username.toLowerCase().includes(input.toLowerCase())){
                return(
                    <View style = {styles.border}>
                    <View style = {styles.MusicContainer}>
                        <Text style={styles.FriendText}>{item.username}</Text>
                    </View>
                <View style={styles.ImagesContainer}>
                    <Image source={require("../assets/important_photo_test.jpg")}
                        style={{
                        width:100,
                        height:100 }}>
                    </Image>
                </View>
        </View>
            )
        }
     
        }} />
    </View>
)

}

export default SearchFriend
            
var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"

const styles = StyleSheet.create({

border:{
    flexDirection: 'row',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 4,
    borderColor: textColor,
    padding: 10,
    backgroundColor: bgColor,
},
FriendText: {
    fontSize: 20,
    color: textColor
  },

MusicContainer:{
    flex:3
},
ImagesContainer:{
    alignContent: 'center',
    flexDirection: 'row',
    flex:1,
    
}
});