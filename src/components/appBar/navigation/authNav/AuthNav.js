import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mainRoutes from '../../../../routes/mainRoutes';
import authSelectors from '../../../../redux/auth/authSelectors';

const AuthNav = () => {
  const isAuth = useSelector(authSelectors.isAuthenticated);
  return (
    <ul className="auth_nav list">
      {mainRoutes.map(
        ({ path, exact, name, icon, isPrivate, restricted }) =>
          !isAuth &&
          !isPrivate &&
          restricted && (
            <li className="nav_item" key={path}>
              <NavLink
                to={path}
                exact={exact}
                className="auth_btn-link"
                activeClassName="auth_btn-activeLink"
              >
                {icon ? (
                  <svg className="" width="28px" height="28px">
                    <use href={icon} />
                  </svg>
                ) : (
                  name
                )}
              </NavLink>
            </li>
          ),
      )}
    </ul>
  );
};

export default AuthNav;
