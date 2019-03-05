import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

export default  Launcher =({navigation})=> {
nav=()=>{

    navigation.navigate('Home')
}

    return (
      <View style={styles.container} >
        <Text> Launcher </Text>
        <TouchableOpacity onPress={this.nav.bind(this)} style={styles.button}  >
        <Text>Navigate</Text>
        </TouchableOpacity>
      </View>
    )
  
}

const styles = StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:'navy',
        justifyContent: 'center',
        alignItems: 'center',
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
