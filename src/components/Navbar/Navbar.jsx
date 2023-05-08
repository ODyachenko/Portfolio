import { NavLink } from 'react-router-dom';
import DarkModeBtn from '../DarkModeBtn/DarkModeBtn';
import './style.css';

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink className="logo" to="/">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <DarkModeBtn />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className="nav-list__link">
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className="nav-list__link">
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contacts" className="nav-list__link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
