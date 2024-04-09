import React from "react"; 
import { StyleSheet, Text, View, FlatList, Image} from "react-native"; 


const SearchFilter = ({data, input, setInput}) => {
return (
    <View>
        <FlatList data={data} renderItem={({item}) => {
            if (input === "") {
                return (
                    <View style = {styles.border}>
                        <View style = {styles.MusicContainer}>
                            <Text style={styles.HistoryText}>{item.username}</Text>
                            <Text style={styles.HistoryText}>{item.title}</Text>
                            <Text style={styles.HistoryText}>{item.artist}</Text>
                            <Text style={styles.HistoryText}>{item.genre}</Text>
                        </View>
                    <View style={styles.ImagesContainer}>
                        <Image source={require("../assets/settingsicon.png")}
                            style={{
                            width:100,
                            height:100 }}>
                        </Image>
                    </View>
            </View>
              )
            }
            if (item.title.toLowerCase().includes(input.toLowerCase())){
                return(
                    <View style = {styles.border}>
                    <View style = {styles.MusicContainer}>
                        <Text style={styles.HistoryText}>{item.username}</Text>
                        <Text style={styles.HistoryText}>{item.title}</Text>
                        <Text style={styles.HistoryText}>{item.artist}</Text>
                        <Text style={styles.HistoryText}>{item.genre}</Text>
                    </View>
                <View style={styles.ImagesContainer}>
                    <Image source={require("../assets/settingsicon.png")}
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

export default SearchFilter
// --------- PlaceHolder code | Check if criteria is not met, and display the text, 
//                              issue right now is that it renders x amount of times isntead of once
       // if (input != item.title.toLowerCase().includes(input.toLowerCase())){
            //     return(
            //             <View>
            //               <Text>No criteria meets this search, sorry!.</Text>
            //             </View>
                           
            //     )
            // }

            
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
HistoryText: {
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