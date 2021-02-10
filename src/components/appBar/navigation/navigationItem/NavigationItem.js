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
            <svg className="" width="28px" height="28px">
              <use href={icon} />
            </svg>
            {/* {name.toUpperCase()} */}
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
            <svg className="" width="28px" height="28px">
              <use href={icon} />
            </svg>
            {/* {name.toUpperCase()} */}
          </NavLink>
        </li>
      )}

      {/* {!isAuth && !isPrivate && restricted && (
        <li className="listItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="link"
            activeClassName="activeLink"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )} */}
    </>
  );
};

export default NavigationItem;
