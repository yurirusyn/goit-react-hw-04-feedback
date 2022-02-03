import s from './feedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, keys }) => {
  return (
    <div>
      {keys.map(item => {
        return (
          <button
            key={item}
            name={item}
            type="button"
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
};
