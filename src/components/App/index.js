import { useState } from 'react';
// Data
import currencies from 'src/data/currencies';
// Components
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Toggler from '../Toggler';
import Footer from '../Footer';
// Styles
import './styles.scss';

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [currencyName, setCurrencyName] = useState('Australian Dollar');
  const [search, setSearch] = useState('');
  const [baseAmount, setBaseAmount] = useState(1);

  function getConvertedAmount() {
    const currentCurrency = currencies.find((item) => item.name === currencyName);
    const { rate } = currentCurrency;
    const convertedAmount = baseAmount * rate;
    return Math.round(convertedAmount * 100) / 100;
  }

  function getFilteredCurrenciesByCurrencyName() {
    return currencies.filter((currency) => {
      const currencyNameLower = currency.name.toLowerCase();
      const searchStringLower = search.toLowerCase();
      return (currencyNameLower.includes(searchStringLower));
    });
  }

  const result = getConvertedAmount();
  const filteredCurrencies = getFilteredCurrenciesByCurrencyName();

  return (
    <div className="app">
      <Header baseAmount={baseAmount} setBaseAmount={setBaseAmount} />
      <Toggler isVisible={isVisible} toggleIsVisible={() => setIsVisible(!isVisible)} />
      <Amount currencyName={currencyName} result={result} />
      { isVisible && <Currencies currencies={filteredCurrencies} setCurrencyName={setCurrencyName} search={search} setSearch={setSearch} /> }
      <Footer />
    </div>
  );
}

export default App;
