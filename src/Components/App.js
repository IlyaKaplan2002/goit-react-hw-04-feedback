import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';
import Section from './Section';

const initialState = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [state, setState] = useState(initialState);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    const total = countTotalFeedback() || 1;
    return Math.round((good / total) * 100);
  };

  const onLeaveFeedback = e => {
    if (e.target.nodeName !== 'BUTTON') return;
    const name = e.target.name;
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            {...state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
