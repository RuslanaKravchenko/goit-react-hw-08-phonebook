import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';

import AuthNav from './navigation/authNav/AuthNav';
import UserMenu from './userMenu/UserMenu';
import Navigation from './navigation/Navigation';

import AppBarStyled from './AppBarStyled';

const AppBar = () => {
  const isAuth = useSelector(authSelectors.isAuthenticated);

  return (
    <AppBarStyled>
      <nav className="app_nav">
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </nav>
    </AppBarStyled>
  );
};

export default AppBar;
