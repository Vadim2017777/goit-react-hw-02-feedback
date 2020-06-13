import React, { Component } from 'react';

import FeedbackOptions from './FeedBackControls/FeedbackOptions';

import Statistics from './Statistics/Statistics';

import Section from './Section/Section';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState({
      [value]: this.state[value] + 1,
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
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    const posFeedBack = this.countPositiveFeedbackPercentage(total, good);
    const options = {
      good: 'good',
      neutral: 'neutral',
      bad: 'bad',
    };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {(good || neutral || bad) > 0 ? (
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
