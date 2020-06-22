import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Body = ({ body }) => {
  return (
    <View className="body" style={styles.post}>
      <Text className="body__copy" style={styles.body}>{body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 5,
  },
  body: {
    color: 'orange',
    textAlign: 'center'
  }
})

export default Body