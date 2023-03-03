import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

//sets the active class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Portfolio
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Menu 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Menu1"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Menu 2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/Menu3"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Menu 3
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
