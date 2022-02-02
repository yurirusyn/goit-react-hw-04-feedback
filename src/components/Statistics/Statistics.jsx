import PropTypes from 'prop-types';
import s from './statistics.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>Total{total}</p>
      <p>
        Positive feedback
        {percentage}%
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
