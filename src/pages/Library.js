import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Libaray extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text> Libaray </Text>
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
