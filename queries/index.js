import gql from 'graphql-tag'

const GET_POSTS = gql`
  query posts {
    posts {
      id
      author
      body
    }
  }
`

const ADD_POST = gql`
  mutation addPost($input: PostInput!) {
    addPost(input: $input) {
      id
    }
  }
`


const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      body
    }
  }
`

export {
  GET_POSTS,
  ADD_POST,
  DELETE_POST
}
