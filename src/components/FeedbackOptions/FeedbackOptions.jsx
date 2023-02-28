import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackButton type="button" data-value="good" onClick={onLeaveFeedback}>
        &#128578; {options[0]}
      </FeedbackButton>
      <FeedbackButton
        type="button"
        data-value="neutral"
        onClick={onLeaveFeedback}
      >
        &#128580; {options[1]}
      </FeedbackButton>
      <FeedbackButton type="button" data-value="bad" onClick={onLeaveFeedback}>
        &#128577; {options[2]}
      </FeedbackButton>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
