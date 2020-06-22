import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import { View, Text } from 'react-native'
import Body from '../../components/Post/Body.js'

describe('Post - Body', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Body />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should return View component', () => {
    const wrapper = mount(<Body />)
    expect(wrapper.find(View).exists()).toBe(true)
  })
  it('should return Text component', () => {
    const wrapper = shallow((<Body />)).dive()
    expect(wrapper.find(Text).exists()).toBe(true)
  })
})
