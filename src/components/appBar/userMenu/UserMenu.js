import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../../redux/auth/authActions';
import authSelectors from '../../../redux/auth/authSelectors';

import sprite from '../../../assets/symbol-defs.svg';
import { getCurrentUserAvatar } from '../../../redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUserName);
  const userAvatar = useSelector(authSelectors.getUserAvatar);

  useEffect(() => {
    dispatch(getCurrentUserAvatar());
    // eslint-disable-next-line
  }, []);

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
          {userAvatar && (
            <span className="avatar_span">
              <img className="avatar_img" src={userAvatar} alt="avatar" />
            </span>
          )}

          {!userAvatar && userName && (
            <span className="avatar_span">{userName[0].toUpperCase()}</span>
          )}
          {!userAvatar && !userName && (
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
