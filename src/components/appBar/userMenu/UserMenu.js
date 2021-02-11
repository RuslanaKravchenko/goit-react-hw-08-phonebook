import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../redux/auth/authActions';
import sprite from '../../../assets/symbol-defs.svg';
import authSelectors from '../../../redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);

  const onHandleUserProfile = () => {
    dispatch(authActions.showProfile());
  };

  return (
    <>
      <div className="userMenu_container">
        <button
          className="user-profile_btn"
          onClick={onHandleUserProfile}
          type="button"
        >
          {userName ? (
            <span className="avatar_span">{userName[0].toUpperCase()}</span>
          ) : (
            <svg className="user-profile_icon" width="40px" height="40px">
              <use href={sprite + '#account_circle'} />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default UserMenu;
