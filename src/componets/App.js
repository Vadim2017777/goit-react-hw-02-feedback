import React, { Component } from 'react';

import FeedbackOptions from './FeedBackControls/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target.dataset;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = (good / total) * 100;
    if (Number.isNaN(percentage)) {
      return 0;
    }
    return Math.round(percentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posFeedBack = this.countPositiveFeedbackPercentage(total, good);
    const isShowStatistic = good || neutral || bad;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        {isShowStatistic > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={posFeedBack}
            />
          </Section>
        ) : (
          <h2>No feedback given</h2>
        )}
      </>
    );
  }
}

export default App;
