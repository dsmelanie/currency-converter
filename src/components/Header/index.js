import './styles.scss';
import PropTypes from 'prop-types';

function Header({ baseAmount, setBaseAmount }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        <input
          className="header-input"
          type="number"
          value={baseAmount}
          onChange={(event) => {
            setBaseAmount(event.target.value);
          }}
        /> €
      </p>
    </header>
  );
}

Header.propTypes = {
  setBaseAmount: PropTypes.func.isRequired,
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
