import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Posts from './Posts'
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
      <Posts />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  }
});

export default RootComponent
