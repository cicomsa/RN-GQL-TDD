import React from 'react'
import { ApolloProvider } from 'react-apollo';
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import Posts from '../components/Posts'
import { GET_POSTS } from '../queries'
import { MockedProvider } from '@apollo/react-testing';
import { Text } from 'react-native'
import wait from 'waait'
import Post from '../components/Post'

const mocks = [
  {
    request: {
      query: GET_POSTS
    },
    result: {
      data: {
        posts: [
          { id: '1', author: 'Author1', body: 'Body1' },
          { id: '2', author: 'Author2', body: 'Body2' }
        ]
      },
    }
  },
];

const mocksError = [
  {
    request: {
      query: GET_POSTS
    },
    error: new Error('error')
  },
];

describe('Posts', () => {
  it('should render loading state correctly', () => {
    const tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Posts />
      </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render loading state initially', () => {
    const component = mount(
      <MockedProvider mocks={[]}>
        <Posts />
      </MockedProvider>
    );
    expect(component.find(Text).exists()).toBe(true)
    expect(component.find(Text).at(0).text()).toBe('Loading...')
  });
  it('should render two Post components', async () => {
    const wrapper = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Posts />
      </MockedProvider>
    )

    await wait(0);

    const component = wrapper.root.findAllByType(Post);
    expect(component.length).toBe(2);

    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  });
  it('should render error message', async () => {
    const wrapper = renderer.create(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <Posts />
      </MockedProvider>
    )
    await wait(0); // wait for response

    const component = wrapper.root.findByType(Text);
    expect(component.props.children).toEqual('Error :(')

    const tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  });
})

