import React from 'react';

const FeedBackControls = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <>
    <button type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </>
);

export default FeedBackControls;
