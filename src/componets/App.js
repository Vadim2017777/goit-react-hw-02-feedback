import React, { Component } from 'react';

import PropTypes from 'prop-types';

class FeedbackWidget extends Component {
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

  render() {
    // const { step } = this.props;

    return (
      <section className={'FeedbackSection'}>
        <h2> Please leave feedback</h2>
        <button type="button" onClick={e => console.log(e.target)}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h3>Statistics</h3>
        <div>
          Good:<span>0</span>
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

export default FeedbackWidget;

// const App = () => (
//   <>
//     <Profile
//       name={User.name}
//       tag={User.tag}
//       location={User.location}
//       avatar={User.avatar}
//       stats={User.stats}
//     />
//     <FriendList friends={Friends} />
//     <Statistics title="Upload stats" stats={StatisticalData} />
//     <TransactionHistory items={Transactions} />
//   </>
// );
