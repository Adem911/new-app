import React from 'react';
import { shallow } from 'enzyme';
import NavigationBar from './NavigationBar';
import { Menu } from 'antd';

describe('<NavigationBar />', () => {
    it('renders correctly a navbar on top', () => {
        const wrapper = shallow(<NavigationBar />);
        expect(wrapper).toMatchSnapshot();

    })

    it('renders a navbar on top', () => {
        const wrapper = shallow(<NavigationBar />);
        expect(wrapper.find(Menu).length).toEqual(1);
        expect(wrapper.find(Menu.Item).length).toEqual(4);

    })
})

