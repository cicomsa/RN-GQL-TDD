import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Post = ({ post, deletePost, id }) => {
  console.log(post)
  return (
    // todo - remove <View> ?
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={deletePost.bind(this, id)}>
        <View style={styles.post}>
          <Text style={styles.title}>{post.author}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.post}>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 5,
  },
  title: {
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    color: 'orange',
    textAlign: 'center'
  }
})

export default Post