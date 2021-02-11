import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = ({
  isAuth,
  path,
  name,
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
            <svg className="" width="30px" height="30px">
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
            <svg className="" width="30px" height="30px">
              <use href={icon} />
            </svg>
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
