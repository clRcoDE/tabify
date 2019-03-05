import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default Explore = ({ navigation }) => {


  navTo = (route) => {
    navigation.navigate(route)
  }


  return (
    <View style={styles.container} >
      <Text> Explore </Text>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={this.navTo.bind(this, 'Products')}
          style={styles.button} >
          <Text>Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.navTo.bind(this, 'Stories')}
          style={styles.button} >
          <Text>Stories</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  }
})
