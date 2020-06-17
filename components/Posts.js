import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Query } from "react-apollo"
import { client } from '../App'
import { GET_POSTS, DELETE_POST } from '../queries'
import Post from './Post'

const Posts = () => {
  const handleRemove = async id => { // todo - this throws an error from GQL
    await client.mutate({
      variables: { id },
      mutation: DELETE_POST,
      refetchQueries: () => [{ query: GET_POSTS }]
    })
  }

  return (
    <Query
      query={GET_POSTS}
    >
      {({ loading, error, data }) => {
        if (loading) return <View><Text>Loading...</Text></View>;
        if (error) return <View><Text>Error :(</Text></View>;

        return (
          <FlatList
            data={data.posts}
            keyExtractor={item => item.id}
            renderItem={data =>
              <Post
                post={data.item.body}
                deletePost={handleRemove}
                id={data.item.id}
              />
            }
          />
        )
      }}
    </Query>
  )
}

const styles = StyleSheet.create({
  posts: {
    marginTop: 5
  }
})

export default Posts