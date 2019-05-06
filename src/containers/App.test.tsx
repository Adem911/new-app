import React from 'react';
import App from './App';
import { shallow } from 'enzyme';


describe('<App />', () => {
  it('renders one h1 element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})
