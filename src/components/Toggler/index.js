import './styles.scss';
import PropTypes from 'prop-types';
import visible from './visible.png';
import notvisible from './notvisible.png';

function Toggler({ isVisible, toggleIsVisible }) {
  return (
    <button
      className="toggler"
      type="button"
      onClick={toggleIsVisible}
    >
      {isVisible ? <img src={notvisible} alt="notvisible" /> : <img src={visible} alt="visible" /> }
    </button>
  );
}

Toggler.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleIsVisible: PropTypes.func.isRequired,
};

export default Toggler;
