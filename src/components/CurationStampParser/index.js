import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SupSubFormatter from '../SupSubFormatter';

import { SgmlToAscii } from '../../utils/Symbols';

/**
 * Component that accepts text and replaces curator
 * stamps with search links.
 *
 * e.g. blah @mygene@   -> blah <a href="/search/mygene">mygene</a>
 *
 * @param text - The text to process.
 * @constructor
 */
function CurationStampParser({text}) {
  const pattern = /@\S+@|.+?(?=@\S+@)|.+/g;

  const arr = text.match(pattern);

  return (
    <Fragment>
      {arr.map((val,i) => {
        const atsRe = /^@(\S+)@$/;
        if (atsRe.test(val)) {
          const linkText = val.replace(atsRe,'$1');
          return (
            <a key={i} href={`/search/${encodeURI(SgmlToAscii(linkText))}`}>
              <SupSubFormatter text={linkText}/>
            </a>
          );
        }
        return val;
      })}
    </Fragment>
  );
}

CurationStampParser.propTypes = {
  text: PropTypes.string.isRequired,
}

export default CurationStampParser;

