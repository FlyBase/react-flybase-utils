import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import CurationStampParser from '../';

describe('<CurationStampParser />', () => {
  it('Component renders', () => {
    const wrapper = shallow(<CurationStampParser text={'blah'} />);
    expect(wrapper.find('a').length).toEqual(0);
    expect(wrapper.contains('blah')).toBe(true);
  });

  it('Renders link', () => {
    const wrapper = mount(<CurationStampParser text={'blah @myGene@ blah'} />);
    expect(wrapper.contains('myGene')).toBe(true);
  });

  it('Renders link w/ sup', () => {
    const wrapper = mount(<CurationStampParser text={'blah @myGene<up>up</up>@ blah'} />);
    expect(wrapper.contains(<sup>up</sup>)).toBe(true);
  });

});
