import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native'

const AddPost = ({ handleSubmit, modalIsOpen, closeModal }) => {
  const initialState = { author: '', body: '' }
  const [post, setPost] = useState(initialState)

  const handleChange = (value, name) => {
    console.log(value, name)
    name === 'author'
      ? setPost({ ...post, author: value })
      : setPost({ ...post, body: value })
  }

  const addPost = () => {
    handleSubmit(post)
    setPost(initialState)
  }

  return (
    <Modal visible={modalIsOpen} animationType='slide'>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Author"
            value={post.author}
            onChangeText={e => handleChange(e, 'author')}
          />
          <TextInput
            style={styles.input}
            placeholder="Body"
            value={post.body}
            multiline
            onChangeText={e => handleChange(e, 'body')}
          />
        </View>
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