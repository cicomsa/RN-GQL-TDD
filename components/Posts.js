import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Post from './Post'
import { GET_POSTS } from '../queries'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Posts = () => {
  const handleRemove = id => {
    // setPosts(posts.filter(post => post.id !== id))
    console.log('remove')
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
});

export default Posts