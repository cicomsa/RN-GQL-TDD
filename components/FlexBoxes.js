import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const FlexBoxes = () => (
  <View style={styles.container}>
    <View style={styles.box1}><Text>Add</Text></View>
    <View style={styles.box2}><Text>New</Text></View>
    <View style={styles.box3}><Text>Post</Text></View>

  </View>
)

const styles = StyleSheet.create({
  box1: {
    backgroundColor: 'green',
    flex: 1, // cover the whole space horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: 'red',
    flex: 1, // cover the whole space horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3: {
    backgroundColor: 'blue',
    flex: 1, // cover the whole space horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 120,
    alignItems: 'stretch', // cover the whole space vertically
    justifyContent: 'space-around',
  }
})

export default FlexBoxes

