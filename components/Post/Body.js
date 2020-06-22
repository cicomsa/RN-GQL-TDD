import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PostContent } from '../Posts'

const Body = () => {
  const { body } = useContext(PostContent)

  return (
    <View style={styles.post}>
      <Text style={styles.body}>{body}</Text>
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