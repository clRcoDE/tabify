import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default  Stories =()=> {
    return (
      <View style={styles.container} >
        <Text> Stories </Text>
      </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#33f'
    }
})
