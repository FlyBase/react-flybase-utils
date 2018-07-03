import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SupSubFormatter from '../SupSubFormatter';
import ReportLink from '../ReportLink';

import { SgmlToAscii } from '../../utils/Symbols';

// Pattern to match @ stamps, text leading @stamps, and everything else.
const AT_STAMP_SEARCH_PATTERN = /@\S+@|.+?(?=@\S+@)|.+/g;
// Pattern to match isolated at stamps.
const ISOLATED_AT_STAMPS = /^@(\S+)@$/;

const FLYBASE_IDS = /^(FB\w{2}\d+):/i;

/**
 * Component that accepts text and replaces curator
 * stamps with search links.
 *
 * e.g. blah @mygene@   -> blah <a href="/search/mygene">mygene</a>
 *
 * @param text - The text to process.
 * @param children - The text to process
 * @param baseURI - The base URI to use for the links.
 *
 * @returns A React.Fragment with text and '@' stamps turned into links to searches or reports.
 */
function CurationStampParser({text, children, baseURI}) {
  const textToSearch = (text) ? text : children;

  if (textToSearch && textToSearch.length > 0) {
    // Get an array of text matches.
    const arr = textToSearch.match(AT_STAMP_SEARCH_PATTERN);

    // Iterate over array and process isolated @ stamps.
    return (
      <Fragment>
        {arr.map((val, i) => {
          if (ISOLATED_AT_STAMPS.test(val)) {
            const linkText = val.replace(ISOLATED_AT_STAMPS, '$1');
            const idMatch = FLYBASE_IDS.exec(linkText);

            if (idMatch && idMatch[1]) {
              return <ReportLink key={idMatch[1]} fbid={idMatch[1]} text={linkText} baseURI={baseURI} />;
            }
            else {
              return (
                <a key={i} href={`${baseURI}/search/${encodeURI(SgmlToAscii(linkText))}`}>
                  <SupSubFormatter>{linkText}</SupSubFormatter>
                </a>
              );
            }
          }
          return val;
        })}
      </Fragment>
    );
  }
  return null;
}

CurationStampParser.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  baseURI: PropTypes.string,
}

CurationStampParser.defaultProps = {
  baseURI: '',
}

export default CurationStampParser;

