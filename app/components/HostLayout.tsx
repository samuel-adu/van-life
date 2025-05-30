import React from 'react';
import { NavLink, Outlet } from 'react-router';
import '../styles/routes/host/host.css';

export default function HostLayout() {
  const activeStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className="host-nav container nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : {})}
              className={({ isActive }) =>
                isActive ? 'nav__link--active' : ''
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="income"
              style={({ isActive }) => (isActive ? activeStyles : {})}
              className={({ isActive }) =>
                isActive ? 'nav__link--active' : ''
              }
            >
              Income
            </NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink
              to="vans"
              style={({ isActive }) => (isActive ? activeStyles : {})}
              className={({ isActive }) =>
                isActive ? 'nav__link--active' : ''
              }
            >
              Vans
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="reviews"
              style={({ isActive }) => (isActive ? activeStyles : {})}
              className={({ isActive }) =>
                isActive ? 'nav__link--active' : ''
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
