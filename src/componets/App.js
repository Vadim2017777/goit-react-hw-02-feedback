import React from 'react';
import Profile from './UserProfile/userProfile';
import user from './UserProfile/user.json';
import Statistics from './StatisticSection/Statistics';
import statisticalData from './StatisticSection/statistical-data.json';
import FriendList from './FriendsList/FriendList';
import friends from './FriendsList/Freinds.json';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
}
