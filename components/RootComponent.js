import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from './Post'
import FlexBoxes from './FlexBoxes'
import AddPost from './AddPost'

const RootComponent = () => {
  const [posts, setPosts] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleSubmit = post => {
    setPosts([
      ...posts,
      {
        id: Math.random().toString(),
        value: post
      }
    ])
    setModalIsOpen(false)
  }

  const handleRemove = id => {
    setPosts(posts.filter(post => post.id !== id))
  }

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <View style={styles.screen} >
      <FlexBoxes />
      <Button title="Add New Post" onPress={openModal} />
      <AddPost
        modalIsOpen={modalIsOpen}
        handleSubmit={handleSubmit}
        closeModal={closeModal}
      />
      <Query
        query={gql`
      {
        posts {
          id
          body
        }
      }
    `}
      >
        {({ loading, error, data }) => {
          console.log(loading, error, data)

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
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  posts: {
    marginTop: 5
  }
});

export default RootComponent
