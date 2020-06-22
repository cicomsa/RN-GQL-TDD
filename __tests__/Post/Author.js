import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import { View, Text } from 'react-native'
import { MockedProvider } from '@apollo/react-testing'
import wait from 'waait'
import Author from '../../components/Post/Author'
import { DELETE_POST } from '../../queries'

const deletePost = jest.fn()

describe('Post - Author', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Author />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should return View component', () => {
    const wrapper = mount(<Author />)
    expect(wrapper.find(View).exists()).toBe(true)
  })
  it('should return Text component', () => {
    const wrapper = shallow((<Author />)).dive()
    expect(wrapper.find(Text).exists()).toBe(true)
  })
  // it('should delete post', async () => {
  //   const deletePost = { author: 'Author', body: 'Body', id: 1 }
  //   let deleteMutationCalled = false
  //   const mocks = [
  //     {
  //       request: {
  //         query: DELETE_POST,
  //         variables: { id: 1 }
  //       },
  //       result: () => {
  //         deleteMutationCalled = true
  //         console.log(deleteMutationCalled)
  //         return { data: { deletePost } }
  //       }
  //     }
  //   ]

  //   const component = renderer.create(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <Author />
  //     </MockedProvider>
  //   )

  //   const author = component.root.findByType(View)
  //   author.props.onClick()

  //   await wait(0)
  //   console.log(deleteMutationCalled)
  //   expect(deleteMutationCalled).toBe(true)
  // })
})
