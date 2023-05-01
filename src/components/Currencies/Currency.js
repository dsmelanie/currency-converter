import PropTypes from 'prop-types';

function Currency({ name, rate, setCurrencyName }) {
  const handleClick = () => {
    setCurrencyName(name);
  };

  return (
    <li
      className="currencies-item"
      onClick={handleClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  setCurrencyName: PropTypes.func.isRequired,
};

export default Currency;
