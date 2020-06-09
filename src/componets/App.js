import React from 'react';

import Profile from './UserProfile/UserProfile';

import User from './data/User.json';

import Statistics from './StatisticSection/Statistics';

import StatisticalData from './data/Statistical-data.json';

import FriendList from './FriendsList/FriendList';

import Friends from './data/Freinds.json';

import Transactions from './data/Transactions.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile
      name={User.name}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats}
    />
    <FriendList friends={Friends} />
    <Statistics title="Upload stats" stats={StatisticalData} />
    <TransactionHistory items={Transactions} />
  </>
);
export default App;
