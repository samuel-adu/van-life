import { Link, NavLink } from 'react-router';
import logo from '../assets/images/van-life-logo.png';
import { LuCircleUser } from 'react-icons/lu';

import '../styles/components/header.css';

export default function Header() {
  return (
    <header className="container">
      <Link to={'/'} className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <nav className="nav main-nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              to={'/host'}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              Host
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              About
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to={'/vans'}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              Vans
            </NavLink>
          </li>
          <li className="nav__list-item">
            <Link to="login" className="login-link">
              <LuCircleUser />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
