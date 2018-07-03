import {
  SYMBOL_UP_TAGNAME as UP,
  SYMBOL_DOWN_TAGNAME as DOWN,
} from '../../constants';

const UPSTART   = new RegExp(`<${UP}>`,'ig');
const UPSTOP    = new RegExp(`<\/${UP}>`,'ig');
const DOWNSTART = new RegExp(`<${DOWN}>`,'ig');
const DOWNSTOP  = new RegExp(`<\/${DOWN}>`,'ig');

/**
 * Replaces all occurrences of <up /> and <down /> tags
 * in a text symbol with their equivalent ASCII representation.
 *
 * e.g. cnn<up>HK21</up> -> cnn[HK21]
 *      cnn<down>HK21</down> -> cnn[[HK21]]
 *
 * @param text - The text symbol to process.
 * @returns {string} - FlyBase ASCII symbol
 * @constructor
 */
export function SgmlToAscii(text) {
  return text
    .replace(UPSTART, '[')
    .replace(UPSTOP, ']')
    .replace(DOWNSTART, '[[')
    .replace(DOWNSTOP, ']]');
}