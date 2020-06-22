import React from 'react'
import Author from './Author'
import Body from './Body'

const Post = ({ post, deletePost, id }) => {
  return (
    <>
      <Author author={post.author} id={id} deletePost={deletePost} />
      <Body body={post.body} />
    </>
  )
}

export default Post