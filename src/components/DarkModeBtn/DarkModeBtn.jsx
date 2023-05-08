import { useState, useEffect, useRef } from 'react';
import './style.css';
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';

function DarkModeBtn() {
  const [darkMode, setDarkMode] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!darkMode) {
      document.body.classList.add('dark');
      btnRef.current.classList.add('active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('active');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <button className="dark-mode-btn" onClick={toggleDarkMode} ref={btnRef}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default DarkModeBtn;
