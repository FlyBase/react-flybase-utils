import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  SYMBOL_UP_TAGNAME,
  SYMBOL_DOWN_TAGNAME
} from "../../constants";

import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

/**
 * Transform function that is called to process the text passed
 * to the SupSubFormatter component.
 *
 * See also {@link https://github.com/wrakky/react-html-parser#transform-function transform}
 *
 * @param node  - {@link https://github.com/fb55/htmlparser2 htmlparser2} object.
 * @param index - node index
 * @returns {React element}
 */
function transform(node,index) {
  if (node.type === 'text') {
    return node.data;
  }
  else if (node.type === 'tag') {
    switch (node.name) {
      case SYMBOL_UP_TAGNAME:
        node.name = 'sup';
        break;
      case SYMBOL_DOWN_TAGNAME:
        node.name = 'sub';
        break;
      default:
        break;
    }
    return convertNodeToElement(node, index, transform);
  }
  return null;
}

/**
 * Component that takes a FlyBase symbol as text and converts
 * any <up /> or <down /> tags into <sup /> and <sub />.
 *
 * @param text - Text / FlyBase symbol to parse.
 * @returns {React Element} - An element
 * @constructor
 */
function SupSubFormatter({text}) {
  return (
    <Fragment>
      { ReactHtmlParser(text, { transform: transform}) }
    </Fragment>
  );
}

SupSubFormatter.propTypes = {
  text: PropTypes.string.isRequired,
};

SupSubFormatter.defaultProps = {
};

export default SupSubFormatter;

