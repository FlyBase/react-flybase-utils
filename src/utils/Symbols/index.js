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
    .replace(/<up>/ig, '[')
    .replace(/<\/up>/ig, ']')
    .replace(/<down>/ig, '[[')
    .replace(/<\/down>/ig, ']]');
}