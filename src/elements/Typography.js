/* eslint-disable react/prop-types */
import React from 'react';

const Typography = props => {
  const {
    myType,
    type,
    size,
    children,
    color,
    margin,
    textAlign,
    zIndex,
    lineHeight,
    textIndent,
    paddingLeft,
    mySpacing,
    wordBreak,
  } = props;

  if (myType == 'title') {
    return (
      <p
        style={{
          textAlign,
          fontFamily: 'Cafe24Ssurround',
          fontSize: '3.6rem',
          color,
          margin,
          zIndex,
          lineHeight: '4.5rem',
          wordBreak,
          letterSpacing: mySpacing ? mySpacing : '-0.2rem',
        }}>
        {children}
      </p>
    );
  } else if (myType == 'content') {
    return (
      <p
        style={{
          fontFamily: type,
          fontSize: '1.6rem',
          color: color,
          textAlign,
          margin,
          zIndex,
          lineHeight: '2.4rem',
          wordBreak: 'keep-all',
          letterSpacing: type.slice(0, 6) == 'Gothic' ? '-0.05rem' : '-0.2rem',
        }}>
        {children}
      </p>
    );
  } else if (myType == 'detail') {
    return (
      <p
        style={{
          fontFamily: 'GothicL',
          fontSize: '1.4rem',
          color: '#078d68',
          margin,
          zIndex,
          lineHeight: '2.2rem',
          wordBreak: 'keep-all',
          letterSpacing: '-0.05rem',
        }}>
        {children}
      </p>
    );
  } else {
    return (
      <p
        style={{
          textAlign,
          fontFamily: type,
          fontSize: size,
          color,
          margin,
          zIndex,
          lineHeight,
          textIndent,
          paddingLeft,
          wordBreak,
          letterSpacing: type.slice(0, 6) == 'Gothic' ? '-0.05rem' : '-0.2rem',
        }}>
        {children}
      </p>
    );
  }
};

Typography.defaultProps = {
  children: null,
  size: '1.5rem',
  type: 'Cafe24Ssurround',
  color: '#078D68',
  margin: false,
  textIndent: null,
  letterSpacing: '-0.25rem',
  wordBreak: 'keep-all',
};

export default Typography;
