import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserProfileStyled from './UserProfileStyled';
import { showModal } from '../../redux/modal/modalActions';
import authSelectors from '../../redux/auth/authSelectors';
import sprite from '../../assets/symbol-defs.svg';
import authActions from '../../redux/auth/authActions';

const UserProfile = () => {
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(showModal('openUpdateUserProfile'));
  };

  const onHandleLogout = () => {
    dispatch(authActions.signOut());
  };
  const avatar = userName[0].toUpperCase();
  return (
    <UserProfileStyled>
      <div className="profileUser_avatar-fild">
        {userName ? (
          <span className="profileUser_span">{avatar}</span>
        ) : (
          <svg width="80px" height="80px">
            <use href={sprite + '#account_circle'} />
          </svg>
        )}
      </div>
      <h3 className="profileUser_name">{userName}</h3>

      <p className="profileUser_email">{userEmail}</p>

      <button
        onClick={onHandleClick}
        type="button"
        className="open_updateProfile_btn profile_btn"
      >
        <svg width="28px" height="28px">
          <use href={sprite + '#manage_accounts'} />
        </svg>
      </button>
      <button className="profile_btn" type="button" onClick={onHandleLogout}>
        <svg width="28px" height="28px">
          <use href={sprite + '#logout'} />
        </svg>
      </button>
    </UserProfileStyled>
  );
};

export default UserProfile;
