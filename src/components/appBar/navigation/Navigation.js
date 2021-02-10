import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../../redux/auth/authSelectors';

import mainRoutes from '../../../routes/mainRoutes';
import NavigationItem from './navigationItem/NavigationItem';

const Navigation = () => {
  const isAuth = useSelector(authSelectors.isAuthenticated);
  return (
    <ul className="main_nav list">
      {mainRoutes.map(route => (
        <NavigationItem {...route} isAuth={isAuth} key={route.path} />
      ))}
    </ul>
  );
};

export default Navigation;
