import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedBackControls from './FeedBackControls';
// import styles from './UserProfile.module.css';

class FeedBackWidget extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handelIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handelIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.bad + this.state.neutral;
    const total2 = (this.state.good / total) * 100;
    return total2;
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <section className={'FeedbackSection'}>
        <h2> Please leave feedback</h2>
        <FeedBackControls
          onIncrementGood={this.handelIncrementGood}
          onIncrementNeutral={this.handelIncrementNeutral}
          onIncrementBad={this.handelIncrementBad}
        />
        <h3>Statistics</h3>
        <div>
          <span>Good:{good}</span>
          <span>Neutral:{neutral}</span>
          <span>Bad:{bad}</span>
          <span>Total:{this.countTotalFeedback()}</span>
          <span>
            Positive feedback:{this.countPositiveFeedbackPercentage()}
          </span>
        </div>
      </section>
    );
  }
}

export default FeedBackWidget;
