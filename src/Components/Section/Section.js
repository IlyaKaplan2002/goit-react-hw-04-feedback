import React from 'react';
import { PropTypes } from 'prop-types';
import SectionStyled from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <h1>{title}</h1>
      {children}
    </SectionStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
