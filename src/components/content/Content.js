import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import mainRoutes from '../../routes/mainRoutes';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

import authSelectors from '../../redux/auth/authSelectors';
import { getShowNotice } from '../../redux/notice/noticeSelectors';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import {
  getModalContent,
  getModalIsOpen,
} from '../../redux/modal/modalSelectors';

import Spinner from '../loader/Loader';
import DefaultPage from '../../views/defaultPage/DefaultPage';
import Notice from '../notice/Notice';
import UserProfile from '../userProfile/UserProfile';
import Modal from '../phonebook/modal/Modal';
import UpdateUserProfileForm from '../updateUserProfileForm/UpdateUserProfileForm';
import EditProfileForm from '../phonebook/editProfileForm/EditProfileForm';
import ContactInfo from '../phonebook/contactInfo/ContactInfo';
import ContactForm from '../phonebook/contactForm/ContactForm';

const Content = () => {
  const isAuth = useSelector(authSelectors.isAuthenticated);
  const showNotice = useSelector(getShowNotice);
  const showProfile = useSelector(authSelectors.showProfile);
  const modalIsOpen = useSelector(getModalIsOpen);
  const modalContent = useSelector(getModalContent);
  const contactById = useSelector(contactsSelectors.getContactById);

  return (
    <div className="container">
      {showProfile && <UserProfile />}

      <CSSTransition
        in={modalIsOpen}
        appear={true}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal>
          {modalContent === 'openUpdateUserProfile' && (
            <UpdateUserProfileForm />
          )}

          {modalContent === 'openEditProfile' && (
            <EditProfileForm contactById={contactById} />
          )}

          {modalContent === 'openContactInfo' && (
            <ContactInfo contactById={contactById} />
          )}

          {modalContent === 'openAddContsctForm' && <ContactForm />}
        </Modal>
      </CSSTransition>

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
