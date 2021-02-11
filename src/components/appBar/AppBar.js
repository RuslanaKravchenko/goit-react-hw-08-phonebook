import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import AuthNav from './navigation/authNav/AuthNav';
import UserMenu from './userMenu/UserMenu';
import Navigation from './navigation/Navigation';
import AppBarStyled from './AppBarStyled';
import authSelectors from '../../redux/auth/authSelectors';

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

// AppBar.propTypes = {};

export default AppBar;
