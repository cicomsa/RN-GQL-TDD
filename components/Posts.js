import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Query } from "react-apollo"
import client from '../apollo-client'
import { GET_POSTS } from '../queries'
import Post from './Post'
import { PostContent } from '../contexts'

const Posts = () => {
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
              <PostContent.Provider value={{ author: data.item.author, id: data.item.id, body: data.item.body }}>
                <Post />
              </PostContent.Provider>
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