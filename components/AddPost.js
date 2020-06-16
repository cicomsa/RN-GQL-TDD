import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const AddPost = ({ handleSubmit, modalIsOpen, closeModal }) => {
  const [post, setPost] = useState('')

  const handleChange = inputText => {
    setPost(inputText)
  }

  const addPost = () => {
    handleSubmit(post)
    setPost('')
  }

  return (
    <Modal visible={modalIsOpen} animationType='slide'>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Placeholder"
          value={post}
          onChangeText={handleChange}
        />
        <View style={styles.buttons}>
          <Button
            title="ADD"
            onPress={addPost}
          />
          <Button
            title="CANCEL"
            color='red'
            onPress={closeModal}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    marginTop: 20,
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  }
})

export default AddPost