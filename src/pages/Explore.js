import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Explore </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'grey'
    }
})
