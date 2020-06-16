import gql from 'graphql-tag'

const GET_POSTS = gql`
  query posts {
    posts {
      id
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

export {
  GET_POSTS,
  ADD_POST
}
