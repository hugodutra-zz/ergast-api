import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../../enzymeSetup';
import { YearsList } from './index';

it('Should render years list', () => {
    const spy = jest.fn();
    const wrapper = shallow(<YearsList fetchSeasonData={ spy } />);
    const button2015 = wrapper.find('li').last().find('a');

    expect(wrapper.find('li').length).toEqual(11);
    expect(wrapper.find('li').first()).toIncludeText('2005');
    expect(wrapper.find('li').last()).toIncludeText('2015');

    button2015.simulate('click');
    expect(spy).toHaveBeenCalled();
});
