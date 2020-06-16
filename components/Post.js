import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Post = ({ post, deletePost, id }) => {
  return (
    // todo - remove <View> ?
    <TouchableOpacity activeOpacity={0.8} onPress={deletePost.bind(this, id)}>
      <View style={styles.post}>
        <Text style={styles.text}>{post}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 5,
  },
  text: {
    color: 'purple'
  }
})

export default Post