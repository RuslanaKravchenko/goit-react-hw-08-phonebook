import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({
  isAuth,
  path,
  exact,
  isPrivate,
  restricted,
  icon,
}) => {
  return (
    <>
      {!isPrivate && !restricted && (
        <li className="nav_item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="link"
            activeClassName="activeLink"
          >
            <svg width="36px" height="36px">
              <use href={icon} />
            </svg>
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className="nav_item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="link"
            activeClassName="activeLink"
          >
            <svg className="" width="36px" height="36px">
              <use href={icon} />
            </svg>
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
