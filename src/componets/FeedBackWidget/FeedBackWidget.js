import React, { Component } from 'react';

// import PropTypes from 'prop-types';

// import styles from './UserProfile.module.css';

class FeedBackWidget extends Component {
  // static defaultProps = {
  //   step: 1,
  // };
  // static PropTypes = {
  //   step: 1,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });

    console.log('good');
  };

  render() {
    const { good } = this.state;

    return (
      <section className={'FeedbackSection'}>
        <h2> Please leave feedback</h2>
        <button type="button" onClick={this.handelIncrement}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h3>Statistics</h3>
        <div>
          <span>Good:{good}</span>
        </div>
        <div>
          Neutral:<span>0</span>
        </div>
        <div>
          Bad:<span>0</span>
        </div>
      </section>
    );
  }
}

export default FeedBackWidget;
