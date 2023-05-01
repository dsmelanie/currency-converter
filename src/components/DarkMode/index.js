import PropTypes from 'prop-types';

import moon from './moon.png';
import sun from './sun.png';
import './styles.scss';

function DarkMode({ isDark, toggleDarkMode }) {
  return (
    <div className="darkmode">
      <label className="toggle-wrapper" htmlFor="toggle">
        <div className={`toggle ${!isDark ? 'enabled' : 'disabled'}`}>
          <div className="icons">
            <img src={moon} alt="enable dark mode" />
            <img src={sun} alt="enable light mode" />
          </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isDark}
            onChange={toggleDarkMode}
          />
        </div>
      </label>
    </div>
  );
}

DarkMode.propTypes = {
  isDark: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default DarkMode;
