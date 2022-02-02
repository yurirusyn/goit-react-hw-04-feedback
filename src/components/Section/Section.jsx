import s from './section.css';
import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <section className="">
      <h2>{title}</h2> {children}
    </section>
  );
}

export default Section;

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
