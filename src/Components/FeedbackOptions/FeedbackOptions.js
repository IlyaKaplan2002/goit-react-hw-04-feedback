import { PropTypes } from 'prop-types';
import React from 'react';
import FeedbackOptionsStyled from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsStyled>
      <ul onClick={onLeaveFeedback}>
        {options.map(option => (
          <li key={option}>
            <button type="button" name={option}>
              {option.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </FeedbackOptionsStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
