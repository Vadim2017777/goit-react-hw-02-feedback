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
    const percentage = (this.state.good / total) * 100;
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
    const posFeedBack = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.handelIncrementGood}
            onIncrementNeutral={this.handelIncrementNeutral}
            onIncrementBad={this.handelIncrementBad}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={posFeedBack}
          />
        </Section>
      </>
    );
  }
}

export default App;
