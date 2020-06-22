import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Author = ({ author, deletePost, id }) => {
  return (
    <TouchableOpacity className="author" activeOpacity={0.8} onPress={deletePost.bind(this, id)}>
      <Text className="author__copy" style={styles.author}>{author}</Text>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  author: {
    color: 'purple',
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  }
})

export default Author