import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign'
const myIcon = <AwesomeIcon name='rocket' size={30} color="#333"/>
const star = <AntIcon name='star' size={25} color="#3535ff"/>
export default class Bookmarks extends Component {

    static navigationOptions=({navigation})=>{
        return{
            // tabBarIcon:(
            // <Image 
            // source={require('../assets/images/circle.png')} 
            // style={{width:25,height:25}} 
            // />)
            tabBarIcon:star
        }
    }



  render() {
    return (
      <View style={styles.container} >
        <Text> Bookmarks </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
