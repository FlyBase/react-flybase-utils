import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SupSubFormatter from '../';

it('simple <up />', () => {
  const wrapper = shallow(<SupSubFormatter text={'my text <up>blah</up>'}/>);
  expect(wrapper.contains(<sup>blah</sup>)).toEqual(true);
});

it('simple <down />', () => {
  const wrapper = shallow(<SupSubFormatter text={'my text <down>blah</down>'}/>);
  expect(wrapper.contains(<sub>blah</sub>)).toEqual(true);
});
