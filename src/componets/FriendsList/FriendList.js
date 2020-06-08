import React from 'react';
import PropTypes from 'prop-types';
import styles from './FreindsList.module.css';

const FreindList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(freind => (
      <li key={freind.id} className={styles.item}>
        <span
          className={freind.isOnline ? styles.active : styles.disabled}
        ></span>
        <img
          className={styles.avatar}
          src={freind.avatar}
          alt={freind.name}
          width="48"
        />
        <p className={styles.name}>{freind.name}</p>
      </li>
    ))}
  </ul>
);

FreindList.defaultProps = {
  freinds: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FreindList;
