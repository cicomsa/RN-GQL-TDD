import React from 'react'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
import Body from '../../components/Post/Body.js'

const props = {
  body: 'body'
}

describe('Post - Author', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Body {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should return component', () => {
    const wrapper = mount(<Body {...props} />)
    expect(wrapper.find('.body').exists()).toBe(true)
  })
  it('should return correct copy', () => {
    const wrapper = shallow((<Body {...props} />)).dive()
    expect(wrapper.find('.body__copy').childAt(0).text()).toEqual(props.body)
  })
})
