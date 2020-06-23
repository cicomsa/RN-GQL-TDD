import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { GET_POSTS, DELETE_POST } from '../../queries'
import client from '../../apollo-client'
import { PostContent } from '../../contexts'

const Author = () => {
  const { author, id } = useContext(PostContent)
  const deletePost = async id => {
    await client.mutate({
      variables: { id },
      mutation: DELETE_POST,
      refetchQueries: () => [{ query: GET_POSTS }]
    })
  }

  return (
    <TouchableOpacity className="author" activeOpacity={0.8} onPress={() => deletePost(id)}>
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