import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import authSelectors from '../../redux/auth/authSelectors';
import { getShowNotice } from '../../redux/notice/noticeSelectors';
import Spinner from '../loader/Loader';
import DefaultPage from '../../views/defaultPage/DefaultPage';
import Notice from '../notice/Notice';

import { CSSTransition } from 'react-transition-group';

const Content = () => {
  const isAuth = useSelector(authSelectors.isAuthenticated);
  const showNotice = useSelector(getShowNotice);
  return (
    <div className="container">
      <CSSTransition
        in={showNotice}
        timeout={250}
        classNames="my-notice"
        unmountOnExit
      >
        <Notice />
      </CSSTransition>

      <Suspense fallback={<Spinner />}>
        <Switch>
          {mainRoutes.map(route =>
            route.isPrivate ? (
              <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
            ) : (
              <PublicRoute {...route} isAuth={isAuth} key={route.path} />
            ),
          )}
          <Route component={DefaultPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Content;
