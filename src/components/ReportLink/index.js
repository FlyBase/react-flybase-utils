import React from 'react';
import PropTypes from 'prop-types';

import { FBID_REGEX } from "../../constants";

import SupSubFormatter from '../SupSubFormatter';

/**
 * Component that takes a FlyBase ID and text and returns
 * a link to the FlyBase report for that ID.
 *
 * @param fbid - The FlyBase ID to link to.
 * @param text - The text to use for the link text.
 * @param baseURI - The base URI to use for the link.
 */
function ReportLink({ fbid, text, children, baseURI }) {
  const linkText = (text) ? text : children;
  const url = `${baseURI}/reports/${fbid}`;
  return (
    <a href={url}>
      <SupSubFormatter>
        {linkText}
      </SupSubFormatter>
    </a>
  );
}

ReportLink.propTypes = {
  fbid: function(props, propName, componentName) {
    if (!FBID_REGEX.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },
  text: PropTypes.string,
  children: PropTypes.string,
  baseURI: PropTypes.string,
}

ReportLink.defaultProps = {
  baseURI: '',
}

export default ReportLink;