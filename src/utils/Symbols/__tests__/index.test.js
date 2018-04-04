import expect from 'expect';

import { SgmlToAscii } from '../';

describe('utils/Symbols', () => {
  it('SymbolToAscii', () => {
    expect(SgmlToAscii('blah')).toBe('blah');
    expect(SgmlToAscii('blah<up>up</up>')).toBe('blah[up]');
    expect(SgmlToAscii('blah<down>down</down>')).toBe('blah[[down]]');
  });
});
