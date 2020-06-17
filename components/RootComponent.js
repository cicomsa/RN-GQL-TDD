import React, { useState } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { client } from '../App';
import { ADD_POST, GET_POSTS } from '../queries'
import Posts from './Posts'
import FlexBoxes from './FlexBoxes'
import AddPost from './AddPost'

const RootComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleSubmit = async post => {
    const input = { body: post, author: 'me' };

    await client.mutate({
      variables: { input },
      mutation: ADD_POST,
      refetchQueries: () => [{ query: GET_POSTS }],
    })

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
})

export default RootComponent
