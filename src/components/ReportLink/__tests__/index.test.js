import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import ReportLink from '../';

describe('<ReportLink />', () => {
  it('Basic link', () => {
    const wrapper = shallow(<ReportLink fbid={'FBgn0000001'} text={'blah'}/>);
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('Link w/ sup', () => {
    const wrapper = mount(<ReportLink fbid={'FBgn0000001'} text={'blah<up>up</up>'}/>);
    expect(wrapper.contains(<sup>up</sup>)).toBe(true);
  });

  it('Link w/ sub', () => {
    const wrapper = mount(<ReportLink fbid={'FBgn0000001'} text={'blah<down>down</down>'}/>);
    expect(wrapper.contains(<sub>down</sub>)).toBe(true);
  });
});

