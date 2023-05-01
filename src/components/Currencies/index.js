import './styles.scss';
import PropTypes from 'prop-types';
import Currency from './Currency';

function Currencies({ currencies, setCurrencyName, search, setSearch }) {
  return (
    <section className="currencies">
      <input
        className="currencies-search"
        type="text"
        placeholder="Search currencies.."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <ul>
        {
          currencies.map((currency) => (
            <Currency key={currency.name} {...currency} setCurrencyName={setCurrencyName} />
          ))
        }
      </ul>
    </section>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  setCurrencyName: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
