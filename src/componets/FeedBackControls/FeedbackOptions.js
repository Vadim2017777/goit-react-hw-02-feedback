import React from 'react';
import PropTypes from 'prop-types';

import './FeedbackOptions.module.css';

const FeedBackControls = ({ onLeaveFeedback }) => (
  <>
    <button type="button" data-name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" data-name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" data-name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

FeedBackControls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackControls;
