import React from 'react';
import PropTypes from 'prop-types';

// import styles from './UserProfile.module.css';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <div>
    <span>Good:{good}</span>
    <span>Neutral:{neutral}</span>
    <span>Bad:{bad}</span>
    <span>Total:{total}</span>
    <span>Positive feedback:{positivePercentage}</span>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
