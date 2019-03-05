import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default  Products =()=> {
    return (
      <View style={styles.container} >
        <Text> Products </Text>
      </View>
    )
  
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#333'
    }
})
