import './styles.scss';
import PropTypes from 'prop-types';

function Amount({ currencyName, result }) {
  return (
    <section className="amount">
      <p className="amount-value">{result}</p>
      <p className="amount-currency">{currencyName}</p>
    </section>
  );
}

Amount.propTypes = {
  currencyName: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
};

export default Amount;
