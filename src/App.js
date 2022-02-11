import { useRef, useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // const [name, setName] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const name = e.target.name;
    // setName(prevName => ({ ...prevName, [name]: prevName[name] + 1 }));
    //-------------------------------------------------------------------------
    // this.setState(prevState => ({
    //   [name]: prevState[name] + 1,
    // }));
    //--------------------------------------------------------------------
    switch (name) {
      case 'good':
        setGood(prevState => {
          return prevState + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setBad(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const percentage = (good * 100) / total;
    return Math.round(percentage);
  };

  const percentage = countPositiveFeedbackPercentage();

  // const total = this.countTotalFeedback();
  // const percentage = this.countPositiveFeedbackPercentage();
  // const { good, neutral, bad } = this.state;
  // const keys = Object.keys(name);
  const keys = useRef(['good', 'neutral', 'bad']);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          keys={keys.current}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
