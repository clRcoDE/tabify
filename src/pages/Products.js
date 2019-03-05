import React, { Component } from 'react'
import { Text, StyleSheet, View ,TouchableOpacity,Image} from 'react-native'

export default   Products=({navigation})=> {


    


    nav=()=>{

       navigation.navigate('Stories')
    }
        return (
          <View style={styles.container} >
            <Text> Products </Text>
            <TouchableOpacity onPress={this.nav.bind(this)} style={styles.button}  >
            <Text>Navigate</Text>
            </TouchableOpacity>
            
          </View>
        )
    
      
    }

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f44'
    },
    
    button:{
        width:150,
        height:50,
        backgroundColor:'gold',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    }
})
