import React, { Fragment } from 'react';
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
    const wanted = (
      <Fragment>
        {'P{GawB}Eip63F-1'}<sup>55B</sup>
      </Fragment>
    );
    expect(wrapper.equals(wanted)).toEqual(true);
  });

  it('Allele symbol', () => {
    const wrapper = shallow(<SupSubFormatter text={'cnn<up>HK21</up>'}/>);
    const wanted = (
      <Fragment>
        cnn<sup>HK21</sup>
      </Fragment>
    );
    expect(wrapper.equals(wanted)).toEqual(true);
  });
});
