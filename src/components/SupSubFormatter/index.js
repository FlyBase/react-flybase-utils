import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

function SupSubFormatter({text}) {
  function transform(node,index) {
    if (node.type === 'text') {
      return node.data;
    }
    else if (node.type === 'tag') {
      switch (node.name) {
        case 'up':
          node.name = 'sup';
          break;
        case 'down':
          node.name = 'sub';
          break;
        default:
          break;
      }
      return convertNodeToElement(node, index, transform);
    }
    return null;
  }

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

