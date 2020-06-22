import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import Author from '../../components/Post/Author'

const props = {
  id: '12312',
  author: 'author',
  deletePost: jest.fn()
}

describe('Post - Author', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should return component', () => {
    const wrapper = mount(<Author {...props} />)
    expect(wrapper.find('.author').exists()).toBe(true)
  })
  it('should return correct copy', () => {
    const wrapper = shallow((<Author {...props} />)).dive()
    expect(wrapper.find('.author__copy').childAt(0).text()).toEqual(props.author)
  })
})
