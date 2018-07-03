import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SupSubFormatter from '../';

describe('<SupSubFormatter />', () =>{
  it('Simple <up />', () => {
    const wrapper = shallow(<SupSubFormatter text={'my text <up>blah</up>'}/>);
    expect(wrapper.contains(<sup>blah</sup>)).toEqual(true);
  });

  it('Simple <down />', () => {
    const wrapper = shallow(<SupSubFormatter text={'my text <down>blah</down>'}/>);
    expect(wrapper.contains(<sub>blah</sub>)).toEqual(true);
  });

  it('Insertion symbol', () => {
    const wrapper = shallow(<SupSubFormatter text={'P{GawB}Eip63F-1<up>55B</up>'}/>);
    expect(wrapper.html()).toEqual('P{GawB}Eip63F-1<sup>55B</sup>');
  });

  it('Allele symbol', () => {
    const wrapper = shallow(<SupSubFormatter text={'cnn<up>HK21</up>'}/>);
    expect(wrapper.html()).toEqual('cnn<sup>HK21</sup>');
  });

  it('Child string elements', () => {
    const wrapper = shallow(<SupSubFormatter>{'cnn<up>HK21</up>'}</SupSubFormatter>);
    expect(wrapper.html()).toEqual('cnn<sup>HK21</sup>');
  });
});
